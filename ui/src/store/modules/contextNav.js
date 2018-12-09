import Vue from 'vue'

const state = {
  contextsTree: []
}

const getters = {
  getContextDataAtCoord: (state) => (coord) => {

    let subTree = state.contextsTree

    /* navigate inside the tree up the penultimate coord */
    for (let ix = 0; ix < coord.length - 1; ix++) {
      if (subTree.length === 0) {
        return null
      }
      subTree = subTree[coord[ix]].subcontextsData
    }

    if (subTree.length === 0) {
      return null
    }

    return subTree[coord[coord.length - 1]]
  }
}

const mutations = {
  setContextsTree: (state, payload) => {
    state.contextsTree = payload
  },
  appendContextDataCommit: (state, payload) => {
    if (payload.coord.length === 1) {
      if (payload.coord[0] === 0) {
        /* initialize tree */
        state.contextsTree = [{
          coordinate: [0],
          inContext: null,
          context: payload.contextData.context,
          contextsData: payload.contextData.subcontextsData,
          contextsDataSet: true,
          expand: true
        }]
        return
      }
    }

    let contextData = getContextDataAtCoord(state.contextsTree, payload.coord)

    if (contextData && payload.contextData) {
      if (contextData.context && payload.contextData.context) {
        /* this function always overwrites the contextData so make sure you
           are overwritting the expected context */
        if (contextData.context.id === payload.contextData.context.id) {
          let inContextData = null
          if (payload.coord.length > 1) {
            inContextData = getContextDataAtCoord(state.contextsTree, payload.coord.slice(0, -1))
          }

          contextData.inContext = inContextData.context
          contextData.context = payload.contextData.context

          /* only update subcontexts if are different from the current ones */
          let newSize = payload.contextData.subcontextsData.length
          let oldSize = contextData.subcontextsData.length

          /* force the new list of subcontexts */
          for (let ix = 0; ix < newSize; ix++) {
            if (ix < contextData.subcontextsData.length) {
              if (contextData.subcontextsData[ix].context.id !== payload.contextData.subcontextsData[ix].context.id) {
                contextData.subcontextsData[ix] = payload.contextData.subcontextsData[ix]
              }
            } else {
              contextData.subcontextsData.push(payload.contextData.subcontextsData[ix])
            }
          }

          /* remove excess contexts */
          if (newSize < oldSize) {
            let nDeleted = oldSize - newSize
            contextData.subcontextsData.splice(-nDeleted, nDeleted)
          }

          contextData.subcontextsDataSet = true
        }
      }
    }
  }
}

const actions = {
  resetContextsTree: (context, payload) => {
    console.log('reseting contextData ' + payload.baseContextId)
    context.dispatch('fetchContextData', {
      contextId: payload.baseContextId,
      coord: [0]
    }).then(() => {
      // context.dispatch('updateCurrentContext', payload.currentContextId)
    })
  },

  /* This will add a context and their immediate subcontexts at a given coordinate.
  Its an asynchronoues method that gets the data from the backend */
  fetchContextData: (context, payload) => {
    return new Promise((resolve, reject) => {
      console.log('appending contextData ' + payload.contextId)
      Vue.axios.get('/1/model/context/' + payload.contextId,
        {
          params: {
            levels: 2,
            parentContextId: payload.parentContextId ? payload.parentContextId : '',
            onlyContexts: true
          }
        }).then((response) => {
          if (response.data.result === 'success') {
            let context = response.data.data
            // console.log(context)

            /* sort subcontexts for this user */
            let subcontexts = context.subcontexts

            let subcontextsData = []

            for (let ix = 0; ix < subcontexts.length; ix++) {
              subcontextsData.push({
                coordinate: payload.coord.concat(ix),
                inContext: context,
                context: subcontexts[ix],
                subcontextsData: [],
                subcontextsDataSet: false,
                expand: false
              })
            }

            let contextData = {
              context: context,
              subcontextsData: subcontextsData
            }

            context.commit('appendContextDataCommit', {
              contextData: contextData,
              coord: payload.coord
            })

            resolve()
          } else {
            reject()
          }
      })
    })
  },

  collapseSubcontext: (context, coord) => {
    let contextData = getContextDataAtCoord(state.contextsTree, coord)
    contextData.expand = false
  },

  expandSubcontext: (context, coord) => {
    let contextData = getContextDataAtCoord(state.contextsTree, coord)
    contextData.expand = true

    /* force subcontexts to be appended */
    console.log('expanding ' + contextData.context.title)
    if (!contextData.subcontextsDataSet) {
      context.dispatch('fetchContextData', {
        parentContextId: contextData.inContext.id,
        contextId: contextData.context.id,
        coord: coord
      })
    }

    /* besides expanding, preload the subcontexts of each subcontext */
    for (let ix = 0; ix < contextData.subcontextsData.length; ix++) {
      if (!contextData.subcontextsData[ix].subcontextsDataSet) {
        console.log('preloading ' + contextData.subcontextsData[ix].context.title + ' id: ' + contextData.subcontextsData[ix].context.id)
        context.dispatch('fetchContextData', {
          contextId: contextData.subcontextsData[ix].context.id,
          parentContextId: contextData.context.id,
          coord: coord.concat(ix)
        })
      }
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
