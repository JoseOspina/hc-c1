<template>
  <table class="asset-table">
    <thead>
      <tr>
        <th>Name</th>
        <th v-for="badge in badgeList" :key="badge">{{ badge }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="receiver in receivers" :key="receiver.name">
        <td>{{ receiver.name }}</td>
        <td
          v-for="badge in badgeList"
          :key="badge"
        >{{ (badge in receiver.badges) ? receiver.badges[badge] : '-' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      receivers: [
        {
          name: "guillem",
          badges: {
            admin: 9
          }
        },
        {
          name: "guillem2",
          badges: {
            admin: 9,
            sustainable: 9
          }
        },
        {
          name: "guillem3",
          badges: {
            sustainable: 9
          }
        }
      ]
    };
  },
  computed: {
    badgeList: function() {
      return this.receivers.reduce((badgeList, receiver) => {
        for (var badge in receiver.badges) {
          if (!badgeList.includes(badge)) badgeList.push(badge);
        }
        return badgeList;
      }, []);
    }
  }
};
</script>

<style>
table.asset-table {
  text-align: center;
  border-collapse: collapse;
}
table.asset-table td,
table.asset-table th {
  border: 1px solid #ffffff;
  padding: 3px 2px;
}
table.asset-table tbody td {
  font-size: 13px;
}
table.asset-table tr:nth-child(even) {
  background: #d0e4f5;
}
table.asset-table thead {
  border-bottom: 5px solid #ffffff;
}
table.asset-table thead th {
  background: rgb(0%, 60.6%, 100%);
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  border-left: 2px solid #ffffff;
}
table.asset-table thead th:first-child {
  border-left: none;
  background: #0b6fa4;
}

table.asset-table tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  background: #d0e4f5;
  border-top: 3px solid #444444;
}
table.asset-table tfoot td {
  font-size: 14px;
}
</style>
