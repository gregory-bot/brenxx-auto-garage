import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleWhatsAppOrder = () => {
    const message = `Hi🙂 I would like to book the following services from Brenxx Auto Garage:\n\n${cartItems
      .map(
        (item) =>
          `${item.title} - KSH ${item.price} (Service Type: ${item.serviceType}, Vehicle Type: ${item.vehicleType}, Rating: ${item.rating})`
      )
      .join('\n')}\n\nTotal: KSH ${total.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254748163492?text=${encodedMessage}`, '_blank');
  };

  const handleEmailOrder = () => {
    const subject = 'New Order from Brenxx Auto Garage';
    const body = `Order Details:\n\n${cartItems
      .map(
        (item) =>
          `${item.title} - KSH ${item.price} (Service Type: ${item.serviceType}, Vehicle Type: ${item.vehicleType}, Rating: ${item.rating})`
      )
      .join('\n')}\n\nTotal: KSH ${total.toFixed(2)}`;

    window.location.href = `mailto:kipngenogregory@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Courier New, monospace' }}>
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-blue-600">Your cart is empty🙂</p>
          </div>
        ) : (
          <div className="bg-blue-200 rounded-lg shadow-lg p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center py-4 border-b">
                <div className="relative w-32 h-32 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute top-0 left-0 w-full h-full object-contain rounded"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-sm text-blue-600">Service Type: {item.serviceType}</p>
                  <p className="text-sm text-blue-600">Vehicle Type: {item.vehicleType}</p>
                  <p className="text-sm text-pink-600">Rating: {item.rating}</p>
                  <p className="text-lg font-bold mt-1">KSH {item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.serviceType, item.vehicleType)}
                  className="mt-4 bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold">KSH {total.toFixed(2)}</span>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Order via WhatsApp</span>
                </button>

                <button
                  onClick={handleEmailOrder}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Order via Email</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;