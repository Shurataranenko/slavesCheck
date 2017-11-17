export default {
   data () {
      return {
         beer: 'Crusovice',
         procs: [
            {
               text: 'Taste',
               value: 5
            },
            {
               text: 'Price',
               value: 5
            },
            {
               text: 'Awesomness',
               value: 5
            }
         ],
         cons: [
            //None
         ]
      }
   },
   computed: {
      totalProc() {
         return this.procs.reduce((total, proc) => total + proc.value, 0);
      },
      totalCons() {
         return 0; //impl
      },
      overall() {
         return this.totalProc - this.totalCons;
      }
   }
}
