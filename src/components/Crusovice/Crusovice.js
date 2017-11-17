export default {
   data () {
      return {
         beer: 'Crusovice',
         pros: [],
         cons: []
      }
   },
   mounted () {
      const vm = this;
      this.$http.get('/data')
      .then(data => {
         [].push.apply(vm.pros, data);
         [].push.apply(vm.cons, data);
      })
      .catch(err => {
         console.log(err);
      });
   },
   computed: {
      totalPro() {
         return this.pros.reduce((total, pro) => total + pro.value, 0);
      },
      totalCons() {
         return this.cons.reduce((total, con) => total + con.value, 0);
      },
      overall() {
         return this.totalProc - this.totalCons;
      }
   }
}
