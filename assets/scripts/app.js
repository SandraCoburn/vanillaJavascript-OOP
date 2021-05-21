class Product {
  /*This can be removed since all these fields get instantiated in the constructor
  title = 'DEFAULT'; //class field
  imageUrl;
  description;
  price;
  */
  constructor(title, image, desc, price) {
    //class method
    this.title = title; //class proptery
    this.imageURL = image;
    this.description = desc;
    this.price = price;
  }
}

//Create a new class to handle logic to render a single product element
class ProductItem {
  constructor(product) {
    this.product = product;
  }
  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item_content">
      <h2>${this.product.title}</h2>
      <h3>\$${this.product.price}</h3>
      <p>${this.product.description}</p>
      <button>Add To Cart</button>
      </div>
      </div
      `;
    return prodEl;
  }
}

// We create another list to handle some of the logic
class ProductList {
  products = [
    new Product(
      'A pillow',
      'https://images.unsplash.com/photo-1574346496016-72a8e1a32ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      'Very soft pillow.',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',

      'Very colorful carpet',
      89.99
    ),
    new Product(
      'A pillow',
      'https://images.unsplash.com/photo-1574346496016-72a8e1a32ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      'Very soft pillow.',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',

      'Very colorful carpet',
      89.99
    ),
    new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',

      'Very colorful carpet',
      89.99
    ),
  ];
  constructor() {}
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
