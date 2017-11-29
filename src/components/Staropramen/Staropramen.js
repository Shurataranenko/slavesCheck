export default {
   data () {
      return {
         beer: 'Staropramen',
         procs: [
            {
               text: 'Taste',
               value: 3
            },
            {
               text: 'Price',
               value: 3
            },
            {
               text: 'Awesomeness',
               value: 1
            }
         ],
         cons: [
            {
                text: 'Health Issue',
                value: 5
             },
             {
                text: 'Morning',
                value: 5
             },
             {
                text: 'Mental disease',
                value: 3
            },
            {
               text: 'Insane ideas',
               value: 2
            }
         ],
      }
   },
   computed: {
      totalProc() {
         return this.procs.reduce((total, proc) => total + proc.value, -8);
      },
      totalCons() {
         return this.cons.reduce((total, con) => total + con.value, -8);
      },
      overal() {
         return this.totalProc - this.totalCons;
      }
   }
}