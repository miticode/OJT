import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoiceData } from '../redux/actions/invoice.actions';
import { useLocation } from "react-router-dom";

const Invoice = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.invoice);
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;

  useEffect(() => {
    dispatch(fetchInvoiceData());
  }, [dispatch]);

  const handlePrint = () => {
    window.print();
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="w-full max-w-3xl mx-auto">
        <header className="bg-black text-white py-6 h-auto">
          <div>
            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/ct_logo.svg" alt="Cursus Logo" className="h-8 ml-[2rem]" />
            <div className="container mx-auto flex justify-between items-center">
              <span className="text-xl font-bold ml-[42rem]">Invoice</span>
            </div>
          </div>
        </header>
        <div className="bg-white">
          <div className="ml-[30rem]">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2 px-4 font-medium text-black">Date:</td>
                  <td>10 April 2020</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium text-black">Invoice No:</td>
                  <td>IVIP12023598</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-medium text-black">Order ID:</td>
                  <td>1258963487</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ml-[3rem]">
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-black">Invoice</h2>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-700 font-medium">To</h3>
                  <p className="text-l">{data.fullname}</p>
                  <p>{data.youraddress}</p>
                  <p>{data.city}</p>
                  <p>{data.zip}</p>
                  <p>{data.country}</p>
                </div>
                <div>
                  <h3 className="text-gray-700 font-medium">Cursus</h3>
                  <p className="text-l">Cursus LTD</p>
                  <p>#1234, Shahid kamail Singh Nagar,</p>
                  <p>Near MBD Mall,</p>
                  <p>141001</p>
                  <p>Ludhiana</p>
                  <p>Punjab</p>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Item</span>
                <span className="text-gray-700 font-medium">Price</span>
                <span className="text-gray-700 font-medium">VAT(20%)</span>
                <span className="text-gray-700 font-medium">Total Amount</span>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span>Item Title</span>
                  <span>${totalPrice.toFixed(2)}</span>
                  <span>$0.00</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2"></div>
              </div>gi
            </div>
          </div>

          <div className="mt-10 text-right">
            <span className="text-gray-700 font-medium text-lg">Invoice Total : USD ${totalPrice.toFixed(2)}</span>
            <p className="text-gray-500 text-base">Paid via Paypal</p>
          </div>
          <p className="text-gray-500 text-base ml-[3rem]">Thanks for buying.</p>

          <button onClick={handlePrint} className="bg-red-500 text-white px-4 py-2 rounded-md ml-[43rem]">
            PRINT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;