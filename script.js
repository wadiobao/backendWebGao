// Sample data (you would have real data fetched from a database)

  
  // Login form submission handler
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // For simplicity, let's just check if username and password match
    if (username === "admin" && password === "1") {
      // Redirect to dashboard page
      window.location.href = "./dashboard.html";
    } else {
      alert("Invalid username or password");
    }
  });
  
 // Sample data (you would have real data fetched from a database)
// Sample data (you would have real data fetched from a database)
l// Sample data (you would have real data fetched from a database)
let products = [
    { name: "Long Grain Rice", price: 10, quantity: 100 },
    { name: "Basmati Rice", price: 15, quantity: 50 },
    { name: "Jasmine Rice", price: 12, quantity: 75 },
  ];
  
  // Function to render products
  function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';
  
    products.forEach(product => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td>${product.quantity}</td>
      `;
      productList.appendChild(row);
    });
  }
  
  // Add product form submission handler
  document.getElementById("add-product-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(document.getElementById("product-price").value);
    const productQuantity = parseInt(document.getElementById("product-quantity").value);
  
    if (productName && productPrice && productQuantity) {
      // Add the product to the products array (simulated database)
      const newProduct = { name: productName, price: productPrice, quantity: productQuantity };
      products.push(newProduct);
      // Re-render the products
      renderProducts();
      // Clear the form
      document.getElementById("add-product-form").reset();
    }
  });
  
  // Logout button click handler
  document.getElementById("logout-btn").addEventListener("click", function() {
    // Here you can perform logout actions such as clearing session, redirecting to login page, etc.
    alert("Logged out successfully!");
    // For demonstration purposes, let's redirect to the login page
    window.location.href = "./index.html";
  });
  
  // Initial rendering of products
  renderProducts();
  
  
  
  
  