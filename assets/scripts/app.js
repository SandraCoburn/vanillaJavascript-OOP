class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;
constructor(title, image, desc, price){
  this.title = title;
  this.imageURL = image;
  this.description = desc;
  this.price = price
}
}

const productList = {
  products: [
    new Product(
      'A pillow',
        'https://images.unsplash.com/photo-1574346496016-72a8e1a32ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        19.99,
        'Very soft pillow.'
    ),
    new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      89.99,
      "Very colorful carpet"
    ),
       new Product(
      'A pillow',
        'https://images.unsplash.com/photo-1574346496016-72a8e1a32ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        19.99,
        'Very soft pillow.'
    ),
   new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      89.99,
      "Very colorful carpet"
    ),
      new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycGV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      89.99,
      "Very colorful carpet"
    ),
    
    
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
      <img src="${prod.imageUrl}" alt="${prod.title}">
      <div class="product-item_content">
      <h2>${prod.title}</h2>
      <h3>\$${prod.price}</h3>
      <p>${prod.description}</p>
      <button>Add To Cart</button>
      </div>
      </div
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
