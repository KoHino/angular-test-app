const Product = require("./model/product");

class FakeDb {
    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト１',
                heading2: 'サンプルテキスト２',
                heading3: 'サンプルテキスト３',
                headingtext1: 'サンプル',
                headingtext2: 'サンプル２',
                headingtext3: 'サンプル３'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト１',
                heading2: 'サンプルテキスト２',
                heading3: 'サンプルテキスト３',
                headingtext1: 'サンプル',
                headingtext2: 'サンプル２',
                headingtext3: 'サンプル３'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'サンプルテキスト１',
                heading2: 'サンプルテキスト２',
                heading3: 'サンプルテキスト３',
                headingtext1: 'サンプル',
                headingtext2: 'サンプル２',
                headingtext3: 'サンプル３'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: '',
                heading1: 'サンプルテキスト１',
                heading2: 'サンプルテキスト２',
                heading3: 'サンプルテキスト３',
                headingtext1: 'サンプル',
                headingtext2: 'サンプル２',
                headingtext3: 'サンプル３'
            }
        ];
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

}

module.exports = FakeDb