let app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                data: [
                    {
                        name: "PC",
                        price: "10000",
                        old_price: "9900",
                        color: "black",
                        quantity: "100",
                        stars: "5",
                        category: "PC",
                        description: "Офигенный комп",
                        details: "Мощный комп",
                        sales: "-10%",
                        reviews: "10"
                    },
                    {
                        name: "НЕPC",
                        price: "НЕ10000",
                        old_price: "НЕ9900",
                        color: "НЕblack",
                        quantity: "НЕ100",
                        stars: "НЕ5",
                        category: "НЕPC",
                        description: "НЕОфигенный комп",
                        details: "НЕМощный комп",
                        sales: "-20%",
                        reviews: "НЕ10"
                    },
                    {
                        name: "PC",
                        price: "10000",
                        old_price: "9900",
                        color: "black",
                        quantity: "100",
                        stars: "5",
                        category: "PC",
                        description: "Офигенный комп",
                        details: "Мощный комп",
                        sales: "-10%",
                        reviews: "10"
                    },
                    {
                        name: "НЕPC",
                        price: "НЕ10000",
                        old_price: "НЕ9900",
                        color: "НЕblack",
                        quantity: "НЕ100",
                        stars: "НЕ5",
                        category: "НЕPC",
                        description: "НЕОфигенный комп",
                        details: "НЕМощный комп",
                        sales: "-20%",
                        reviews: "-20%"
                    },
                    {
                        name: "PC",
                        price: "10000",
                        old_price: "9900",
                        color: "black",
                        quantity: "100",
                        stars: "5",
                        category: "PC",
                        description: "Офигенный комп",
                        details: "Мощный комп",
                        sales: "-10%",
                        reviews: "10"
                    },
                ]
            }
            ],
        sum:0,
        name:'',
        price:'',
        quantity:'',
        total:0,
        value1: 40
    },
    methods:{
        app: function (){

    },
        plus: function (){
            console.log(this.products[0].data[0]);
        },
        deleted: function (){
          this.products.pop();
            this.value1 = parseInt(this.value1) -  40+'px';
        }
    }
});