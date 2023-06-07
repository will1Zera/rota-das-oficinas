import React, { useState } from 'react';
import * as C from "./styles";
import GlobalStyle from "./global";

function App() {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [consumption, setConsumption] = useState({});
  const [totals, setTotals] = useState({});

  const handleProductChange = (productId, customerId) => (e) => {
    const updatedConsumption = { ...consumption };

    if (!updatedConsumption[customerId]) {
      updatedConsumption[customerId] = {};
    }

    updatedConsumption[customerId][productId] = parseFloat(e.target.value);
    setConsumption(updatedConsumption);
  };

  const handleCustomerChange = (customerId) => (e) => {
    const updatedCustomers = [...customers];
    updatedCustomers[customerId].name = e.target.value;
    setCustomers(updatedCustomers);
  };

  const handleServiceChargeChange = (customerId) => (e) => {
    const updatedCustomers = [...customers];
    updatedCustomers[customerId].serviceCharge = e.target.checked;
    setCustomers(updatedCustomers);
  };

  const addProduct = () => {
    setProducts([...products, '']);
  };

  const addCustomer = () => {
    setCustomers([...customers, { name: '', serviceCharge: true }]);
  };

  const calculateBill = () => {
    const updatedTotals = {};

    const numConsumersByProduct = {};
    products.forEach((_, productId) => {
      let numConsumers = 0;
      customers.forEach((_, customerId) => {
        if (consumption[customerId] && consumption[customerId][productId]) {
          numConsumers++;
        }
      });
      numConsumersByProduct[productId] = numConsumers;
    });

    customers.forEach((customer, customerId) => {
      let total = 0;

      products.forEach((_, productId) => {
        if (consumption[customerId] && consumption[customerId][productId]) {
          const numConsumers = numConsumersByProduct[productId];
          const productCost = parseFloat(products[productId]);
          total += (consumption[customerId][productId] * productCost) / numConsumers;
        }
      });

      if (customer.serviceCharge) {
        total *= 1.1;
      }

      updatedTotals[customer.name] = total.toFixed(2);
    });

    setTotals(updatedTotals);
  };

  return (
    <C.Container>
      <GlobalStyle />
      <h2>Calculadora de Conta</h2>
      <C.Products>
        <h3>Produtos:</h3>
        <button onClick={addProduct}><i class="fa-solid fa-plus"></i>Produto</button>
        {products.map((_, productId) => (
          <input
            key={`product-${productId}`}
            type="number"
            placeholder={`Produto ${productId + 1}`}
            value={products[productId]}
            onChange={(e) => {
              const updatedProducts = [...products];
              updatedProducts[productId] = e.target.value;
              setProducts(updatedProducts);
            }}
          />
        ))}
      </C.Products>

      <C.Clients>
        <h3>Clientes:</h3>
        <button onClick={addCustomer}><i class="fa-solid fa-plus"></i>Cliente</button>
        {customers.map((customer, customerId) => (
          <div key={`customer-${customerId}`}>
            <input
              type="text"
              placeholder={`Cliente ${customerId + 1}`}
              value={customer.name}
              onChange={handleCustomerChange(customerId)}
            />
            {products.map((_, productId) => (
              <input
                key={`customer-${customerId}-product-${productId}`}
                type="number"
                placeholder={`Produto ${productId + 1}`}
                value={consumption[customerId] && consumption[customerId][productId] ? consumption[customerId][productId] : ''}
                onChange={handleProductChange(productId, customerId)}
              />
            ))}
            <label>
              taxa (10%):
              <C.Checkbox
                type="checkbox"
                checked={customer.serviceCharge}
                onChange={handleServiceChargeChange(customerId)}
              />
            </label>
          </div>
        ))}
        <button onClick={calculateBill}><i class="fa-solid fa-calculator"></i>Calcular</button>
        {Object.keys(totals).length > 0 && (
          <div>
            <h3>Valor da conta:</h3>
            <ul>
              {Object.entries(totals).map(([customer, total]) => (
                <li key={customer}>{customer}: R${total}</li>
              ))}
            </ul>
          </div>
        )}
      </C.Clients>
    </C.Container>
  );
}

export default App;
