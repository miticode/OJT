import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DownOutlined,
  LockOutlined,
  CreditCardOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Select, message } from "antd";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { updateUser } from "../redux/actions/user.action";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;
  const handleHome = () => {
    navigate("/home");
  };
  const handlePaidMemship = () => {
    navigate("/paidmembership");
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleInvoice = () => {
    navigate("/invoice" , { state: { totalPrice } });
  };
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );
  const [academyname, setAcademyname] = useState(
    localStorage.getItem("academyname") || ""
  );
  const [country, setCountry] = useState(localStorage.getItem("country") || "");
  const [addressline1, setAddressline1] = useState(
    localStorage.getItem("addressline1") || ""
  );
  const [addressline2, setAddressline2] = useState(
    localStorage.getItem("addressline2") || ""
  );
  const [city, setCity] = useState(localStorage.getItem("city") || "");
  const [province, setProvince] = useState(
    localStorage.getItem("state/province/region") || ""
  );
  const [zip, setZip] = useState(localStorage.getItem("zip/postalcode") || "");
  const [phonenumber, setPhonenumber] = useState(
    localStorage.getItem("phonenumber") || ""
  );
  const [fullname, setFullname] = useState(
    localStorage.getItem("fullname") || ""
  );
  const [youraddress, setYouraddress] = useState(
    localStorage.getItem("youraddress") || ""
  );
  const [swiftcode, setSwiftcode] = useState(
    localStorage.getItem("swiftcode") || ""
  );
  const [backaccountnumber, setBackaccountnumber] = useState(
    localStorage.getItem("backaccountnumber") || ""
  );
  const [backname, setBackname] = useState(
    localStorage.getItem("backname") || ""
  );
  const [backaddress, setBackaddress] = useState(
    localStorage.getItem("backaddress") || ""
  );

  useEffect(() => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("academyname", academyname);
    localStorage.setItem("country", country);
    localStorage.setItem("addressline1", addressline1);
    localStorage.setItem("addressline2", addressline2);
    localStorage.setItem("city", city);
    localStorage.setItem("state/province/region", province);
    localStorage.setItem("zip", zip);
    localStorage.setItem("phonenumber", phonenumber);
    localStorage.setItem("youraddress", youraddress);
    localStorage.setItem("swiftcode", swiftcode);
    localStorage.setItem("backaccountnumber", backaccountnumber);
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("backname", backname);
    localStorage.setItem("backaddress", backaddress);
  }, [
    firstName,
    lastName,
    academyname,
    country,
    addressline1,
    addressline2,
    city,
    province,
    zip,
    phonenumber,
    youraddress,
    swiftcode,
    backaccountnumber,
    fullname,
    backname,
    backaddress,
  ]);

  const dispatch = useDispatch();
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, user } = userUpdate;
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Save Changes Success",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = Cookies.get("id");
    console.log(academyname);

    dispatch(
      updateUser(
        userId,
        firstName,
        lastName,
        academyname,
        country,
        addressline1,
        addressline2,
        city,
        province,
        zip,
        phonenumber,
        youraddress,
        swiftcode,
        backaccountnumber,
        fullname,
        backname,
        backaddress
      )
    )
      .then(() => {
        success();
      })
      .catch((error) => {
        messageApi.open({
          type: "error",
          content: `Error: ${error.message}`,
        });
      });
  };

  const Credit = () => {
    return (
      <div>
        <div className="flex gap-5 mt-10  gap-x-20">
          <div>
            <h1 className="text-black  text-[14px]">Holder Name</h1>
            <input
              placeholder="Enter Holder Name"
              className="h-10 pl-3 rounded-md w-[305px] border border-solid text-[14px]"
            />
          </div>
          <div>
            <h1 className="text-black text-[14px]">Card Number</h1>
            <input
              placeholder="Card #"
              className="h-10 pl-3 rounded-md w-[305px] border border-solid text-[14px]"
            />
          </div>
        </div>
        <div className="flex gap-x-11">
          <div className="mt-8">
            <h1 className="text-black text-[14px]">Country*</h1>
            <Select
              defaultValue="Month"
              className="w-[200px] h-10"
              onChange={handleChange}
              options={[
                { value: "Month", label: "Month" },
                { value: "January", label: "January" },
                { value: "Febuary", label: "Febuary" },
                { value: "March", label: "March" },
                { value: "April", label: "April" },
                { value: "May", label: "May" },
                { value: "June", label: "June" },
                { value: "July", label: "July" },
                { value: "August", label: "August" },
                { value: "September", label: "September" },
                { value: "October", label: "October" },
                { value: "November", label: "November" },
                { value: "December", label: "December" },
              ]}
            />
          </div>
          <div className="mt-8">
            <h1 className="text-black  text-[14px]">Expiration Year</h1>
            <input
              placeholder="Year"
              className="h-10 pl-3 rounded-md w-[200px] border border-solid text-[14px]"
            />
          </div>
          <div className="mt-8">
            <h1 className="text-black text-[14px]">Expiration Year</h1>
            <input
              placeholder="CVC"
              className="h-10 pl-3 rounded-md w-[200px] border border-solid text-[14px]"
            />
          </div>
        </div>
      </div>
    );
  };

  const Bank = () => {
    return (
      <div>
        <div className="flex gap-5 mt-10  gap-x-20">
          <div>
            <h1 className="text-black  text-[14px]">Holder Name</h1>
            <input
              placeholder="Enter Holder Name"
              className="h-10 pl-3 rounded-md w-[305px] border border-solid text-[14px]"
            />
          </div>
          <div>
            <h1 className="text-black text-[14px]">Card Number</h1>
            <input
              placeholder="Card #"
              className="h-10 pl-3 rounded-md w-[305px] border border-solid text-[14px]"
            />
          </div>
        </div>
        <div className="flex gap-x-20 mt-8">
          <div>
            <h1 className="text-black text-[14px]">Bank Name</h1>
            <Select
              defaultValue="State bank"
              className="w-[305px] h-10"
              onChange={handleChange}
              options={[
                { value: "Indian Bank", label: "Indian Bank" },
                { value: "MB Bank", label: "MB Bank" },
                { value: "ICBC Bank", label: "ICBC Bank" },
                { value: "CCB Bank", label: "CCB Bank" },
                { value: "BOC Bank", label: "BOC Bank" },
                { value: "AEC Bank", label: "AEC Bank" },
              ]}
            />
          </div>
          <div>
            <h1 className="text-black text-[14px]">IFSC Code</h1>
            <input
              placeholder="Enter IFSC Code"
              className="h-10 pl-3 rounded-md w-[305px] border border-solid text-[14px]"
            />
          </div>
        </div>
      </div>
    );
  };

  const Paypal = () => {
    return (
      <div>
        <div className="mt-8">
          <p className="text-[14px] text-[#686F7A]">
            After payment via PayPal's secure checkout, we will send you a link
            to download your files.
          </p>
        </div>
        <div className="mt-8 flex">
          <div>
            <p className="text-[14px] text-[#686F7A] mt-4">PayPal accepts</p>
          </div>
          <div className="flex ml-3 ">
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-1.svg"
                alt="py1"
              />
            </div>
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-2.svg"
                alt="py2"
              />
            </div>
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-3.svg"
                alt="py3"
              />
            </div>
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-4.svg"
                alt="py4"
              />
            </div>
            <div>
              <img
                className="w-[50px] h-[50px]"
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-5.svg"
                alt="py5"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="text-black bg-white">
        <div className="flex justify-between">
          <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
            <p onClick={handleHome}>Home /</p>
            <p onClick={handlePaidMemship}>Paid Membership /</p>
            <p className="text-[#787878]">Checkout</p>
          </div>
        </div>
        <div className="pt-5 pb-3 pl-[11%] text-2xl">
          <h1>Checkout</h1>
        </div>
      </div>
      <div className="flex mt-10 justify-center gap-x-5 mr-16">
        <div className="bg-white w-[750px] h-auto">
          <div className="mt-6 ml-5">
            <h1 className="text-xl font-bold mb-4 text-center md:text-left text-black">
              Our Origins
            </h1>
            <div className="w-10 h-0.5 bg-red-600 mb-4 mx-auto md:mx-0"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-8">
              <div className="relative w-auto overflow-hidden mb-6">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-10 z-10 cursor-pointer opacity-0"
                />
                <div className="bg-white h-10 w-full pl-5 flex items-center">
                  <h1 className="text-lg font-semibold text-black">
                    Edit Address
                  </h1>
                </div>
                <div className="absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                  <DownOutlined className="w-5 h-5" />
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-[2000px]">
                  <div className="flex gap-5 mt-10 ml-5 gap-x-20">
                    <div>
                      <h1 className="text-black ">First Name*</h1>
                      <input
                        placeholder="First Name"
                        className="p-3 w-[300px] border border-solid"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <h1 className="text-black ">Last Name*</h1>
                      <input
                        placeholder="Last Name"
                        className="p-3 w-[300px] border border-solid"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-10 ml-5 items-center">
                    <h1 className="text-black ">Academy Name*</h1>
                    <input
                      placeholder="Academy Name"
                      className="p-3 w-[680px] border border-solid"
                      value={academyname}
                      onChange={(e) => setAcademyname(e.target.value)}
                    />
                    <p className="text-[#686F7A] text-[13px]">
                      If you want your invoices addressed to a academy. Leave
                      blank to use your full name.
                    </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-black pl-5">Country*</h1>
                    <Select
                      defaultValue="VietNam"
                      className="w-[680px] ml-5 h-10"
                      onChange={handleChange}
                      options={[
                        { value: "Afghanistan", label: "Afghanistan" },
                        { value: "Albania", label: "Albania" },
                        { value: "Algeria", label: "Algeria" },
                        { value: "American Samoa", label: "American Samoa" },
                        { value: "Andorra", label: "Andorra" },
                        { value: "Angola", label: "Angola" },
                        { value: "Anguilla", label: "Anguilla" },
                        { value: "Antarctica", label: "Antarctica" },
                        {
                          value: "Antigua and Barbuda",
                          label: "Antigua and Barbuda",
                        },
                        { value: "Argentina", label: "Argentina" },
                        { value: "Armenia", label: "Armenia" },
                        { value: "Aruba", label: "Aruba" },
                        { value: "Australia", label: "Australia" },
                        { value: "Austria", label: "Austria" },
                        { value: "Azerbaijan", label: "Azerbaijan" },
                        { value: "Bahamas", label: "Bahamas" },
                        { value: "Bahrain", label: "Bahrain" },
                        { value: "Bangladesh", label: "Bangladesh" },
                        { value: "Barbados", label: "Barbados" },
                        { value: "Belarus", label: "Belarus" },
                        { value: "Belgium", label: "Belgium" },
                        { value: "Belize", label: "Belize" },
                        { value: "Benin", label: "Benin" },
                        { value: "Bermuda", label: "Bermuda" },
                        { value: "Bhutan", label: "Bhutan" },
                        { value: "Bolivia", label: "Bolivia" },
                        {
                          value: "Bosnia and Herzegovina",
                          label: "Bosnia and Herzegovina",
                        },
                        { value: "Botswana", label: "Botswana" },
                        { value: "Brazil", label: "Brazil" },
                        {
                          value: "British Virgin Islands",
                          label: "British Virgin Islands",
                        },
                        { value: "Brunei", label: "Brunei" },
                        { value: "Bulgaria", label: "Bulgaria" },
                        { value: "Burkina Faso", label: "Burkina Faso" },
                        { value: "Burundi", label: "Burundi" },
                        { value: "Cabo Verde", label: "Cabo Verde" },
                        { value: "Cambodia", label: "Cambodia" },
                        { value: "Cameroon", label: "Cameroon" },
                        { value: "Canada", label: "Canada" },
                        { value: "Cayman Islands", label: "Cayman Islands" },
                        {
                          value: "Central African Republic",
                          label: "Central African Republic",
                        },
                        { value: "Chad", label: "Chad" },
                        { value: "Chile", label: "Chile" },
                        { value: "China", label: "China" },
                        { value: "Colombia", label: "Colombia" },
                        { value: "Comoros", label: "Comoros" },
                        { value: "Congo", label: "Congo" },
                        { value: "Cook Islands", label: "Cook Islands" },
                        { value: "Costa Rica", label: "Costa Rica" },
                        { value: "Croatia", label: "Croatia" },
                        { value: "Cuba", label: "Cuba" },
                        { value: "Cyprus", label: "Cyprus" },
                        { value: "Czech Republic", label: "Czech Republic" },
                        { value: "Denmark", label: "Denmark" },
                        { value: "Djibouti", label: "Djibouti" },
                        { value: "Dominica", label: "Dominica" },
                        {
                          value: "Dominican Republic",
                          label: "Dominican Republic",
                        },
                        { value: "Ecuador", label: "Ecuador" },
                        { value: "Egypt", label: "Egypt" },
                        { value: "El Salvador", label: "El Salvador" },
                        {
                          value: "Equatorial Guinea",
                          label: "Equatorial Guinea",
                        },
                        { value: "Eritrea", label: "Eritrea" },
                        { value: "Estonia", label: "Estonia" },
                        { value: "Eswatini", label: "Eswatini" },
                        { value: "Ethiopia", label: "Ethiopia" },
                        { value: "Fiji", label: "Fiji" },
                        { value: "Finland", label: "Finland" },
                        { value: "France", label: "France" },
                        { value: "Gabon", label: "Gabon" },
                        { value: "Gambia", label: "Gambia" },
                        { value: "Georgia", label: "Georgia" },
                        { value: "Germany", label: "Germany" },
                        { value: "Ghana", label: "Ghana" },
                        { value: "Greece", label: "Greece" },
                        { value: "Grenada", label: "Grenada" },
                        { value: "Guatemala", label: "Guatemala" },
                        { value: "Guinea", label: "Guinea" },
                        { value: "Guinea-Bissau", label: "Guinea-Bissau" },
                        { value: "Guyana", label: "Guyana" },
                        { value: "Haiti", label: "Haiti" },
                        { value: "Honduras", label: "Honduras" },
                        { value: "Hong Kong SAR", label: "Hong Kong SAR" },
                        { value: "Hungary", label: "Hungary" },
                        { value: "Iceland", label: "Iceland" },
                        { value: "India", label: "India" },
                        { value: "Indonesia", label: "Indonesia" },
                        { value: "Iran", label: "Iran" },
                        { value: "Iraq", label: "Iraq" },
                        { value: "Ireland", label: "Ireland" },
                        { value: "Israel", label: "Israel" },
                        { value: "Italy", label: "Italy" },
                        { value: "Jamaica", label: "Jamaica" },
                        { value: "Japan", label: "Japan" },
                        { value: "Jordan", label: "Jordan" },
                        { value: "Kazakhstan", label: "Kazakhstan" },
                        { value: "Kenya", label: "Kenya" },
                        { value: "Kiribati", label: "Kiribati" },
                        { value: "Kuwait", label: "Kuwait" },
                        { value: "Kyrgyzstan", label: "Kyrgyzstan" },
                        { value: "Laos", label: "Laos" },
                        { value: "Latvia", label: "Latvia" },
                        { value: "Lebanon", label: "Lebanon" },
                        { value: "Lesotho", label: "Lesotho" },
                        { value: "Liberia", label: "Liberia" },
                        { value: "Libya", label: "Libya" },
                        { value: "Liechtenstein", label: "Liechtenstein" },
                        { value: "Lithuania", label: "Lithuania" },
                        { value: "Luxembourg", label: "Luxembourg" },
                        { value: "Madagascar", label: "Madagascar" },
                        { value: "Malawi", label: "Malawi" },
                        { value: "Malaysia", label: "Malaysia" },
                        { value: "Maldives", label: "Maldives" },
                        { value: "Mali", label: "Mali" },
                        { value: "Malta", label: "Malta" },
                        {
                          value: "Marshall Islands",
                          label: "Marshall Islands",
                        },
                        { value: "Mauritania", label: "Mauritania" },
                        { value: "Mauritius", label: "Mauritius" },
                        { value: "Mexico", label: "Mexico" },
                        { value: "Micronesia", label: "Micronesia" },
                        { value: "Moldova", label: "Moldova" },
                        { value: "Monaco", label: "Monaco" },
                        { value: "Mongolia", label: "Mongolia" },
                        { value: "Montenegro", label: "Montenegro" },
                        { value: "Morocco", label: "Morocco" },
                        { value: "Mozambique", label: "Mozambique" },
                        { value: "Myanmar", label: "Myanmar" },
                        { value: "Namibia", label: "Namibia" },
                        { value: "Nauru", label: "Nauru" },
                        { value: "Nepal", label: "Nepal" },
                        { value: "Netherlands", label: "Netherlands" },
                        { value: "New Zealand", label: "New Zealand" },
                        { value: "Nicaragua", label: "Nicaragua" },
                        { value: "Niger", label: "Niger" },
                        { value: "Nigeria", label: "Nigeria" },
                        { value: "North Korea", label: "North Korea" },
                        { value: "North Macedonia", label: "North Macedonia" },
                        { value: "Norway", label: "Norway" },
                        { value: "Oman", label: "Oman" },
                        { value: "Pakistan", label: "Pakistan" },
                        { value: "Palau", label: "Palau" },
                        { value: "Palestine State", label: "Palestine State" },
                        { value: "Panama", label: "Panama" },
                        {
                          value: "Papua New Guinea",
                          label: "Papua New Guinea",
                        },
                        { value: "Paraguay", label: "Paraguay" },
                        { value: "Peru", label: "Peru" },
                        { value: "Philippines", label: "Philippines" },
                        { value: "Poland", label: "Poland" },
                        { value: "Portugal", label: "Portugal" },
                        { value: "Puerto Rico", label: "Puerto Rico" },
                        { value: "Qatar", label: "Qatar" },
                        { value: "Romania", label: "Romania" },
                        { value: "Russia", label: "Russia" },
                        { value: "Rwanda", label: "Rwanda" },
                        {
                          value: "Saint Kitts and Nevis",
                          label: "Saint Kitts and Nevis",
                        },
                        { value: "Saint Lucia", label: "Saint Lucia" },
                        {
                          value: "Saint Vincent and the Grenadines",
                          label: "Saint Vincent and the Grenadines",
                        },
                        { value: "Samoa", label: "Samoa" },
                        { value: "San Marino", label: "San Marino" },
                        {
                          value: "Sao Tome and Principe",
                          label: "Sao Tome and Principe",
                        },
                        { value: "Saudi Arabia", label: "Saudi Arabia" },
                        { value: "Senegal", label: "Senegal" },
                        { value: "Serbia", label: "Serbia" },
                        { value: "Seychelles", label: "Seychelles" },
                        { value: "Sierra Leone", label: "Sierra Leone" },
                        { value: "Singapore", label: "Singapore" },
                        { value: "Slovakia", label: "Slovakia" },
                        { value: "Slovenia", label: "Slovenia" },
                        { value: "Solomon Islands", label: "Solomon Islands" },
                        { value: "Somalia", label: "Somalia" },
                        { value: "South Africa", label: "South Africa" },
                        { value: "South Korea", label: "South Korea" },
                        { value: "South Sudan", label: "South Sudan" },
                        { value: "Spain", label: "Spain" },
                        { value: "Sri Lanka", label: "Sri Lanka" },
                        { value: "Sudan", label: "Sudan" },
                        { value: "Suriname", label: "Suriname" },
                        { value: "Sweden", label: "Sweden" },
                        { value: "Switzerland", label: "Switzerland" },
                        { value: "Syria", label: "Syria" },
                        { value: "Taiwan", label: "Taiwan" },
                        { value: "Tajikistan", label: "Tajikistan" },
                        { value: "Tanzania", label: "Tanzania" },
                        { value: "Thailand", label: "Thailand" },
                        { value: "Timor-Leste", label: "Timor-Leste" },
                        { value: "Togo", label: "Togo" },
                        { value: "Tonga", label: "Tonga" },
                        {
                          value: "Trinidad and Tobago",
                          label: "Trinidad and Tobago",
                        },
                        { value: "Tunisia", label: "Tunisia" },
                        { value: "Turkey", label: "Turkey" },
                        { value: "Turkmenistan", label: "Turkmenistan" },
                        { value: "Tuvalu", label: "Tuvalu" },
                        { value: "Uganda", label: "Uganda" },
                        { value: "Ukraine", label: "Ukraine" },
                        {
                          value: "United Arab Emirates",
                          label: "United Arab Emirates",
                        },
                        { value: "United Kingdom", label: "United Kingdom" },
                        { value: "United States", label: "United States" },
                        { value: "Uruguay", label: "Uruguay" },
                        { value: "Uzbekistan", label: "Uzbekistan" },
                        { value: "Vanuatu", label: "Vanuatu" },
                        { value: "Venezuela", label: "Venezuela" },
                        { value: "Vietnam", label: "Vietnam" },
                        { value: "Yemen", label: "Yemen" },
                        { value: "Zambia", label: "Zambia" },
                        { value: "Zimbabwe", label: "Zimbabwe" },
                      ]}
                    />
                  </div>
                  <div className="mt-10 ml-5 items-center">
                    <h1 className="text-black ">Address1*</h1>
                    <input
                      placeholder="Address1"
                      className="p-3 w-[680px] border border-solid"
                      value={addressline1}
                      onChange={(e) => setAddressline1(e.target.value)}
                    />
                  </div>
                  <div className="mt-10 ml-5 items-center">
                    <h1 className="text-black ">Address2*</h1>
                    <input
                      placeholder="Address2"
                      className="p-3 w-[680px] border border-solid"
                      value={addressline2}
                      onChange={(e) => setAddressline2(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-20 ml-5 mt-10">
                    <div>
                      <h1 className="text-black ">City*</h1>
                      <input
                        placeholder="Street Address"
                        className="p-3 w-[300px] border border-solid"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div>
                      <h1 className="text-black ">
                        State / Province / Region*
                      </h1>
                      <input
                        placeholder="Apartment Number"
                        className="p-3 w-[300px] border border-solid"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex gap-20 ml-5 mt-10">
                    <div>
                      <h1 className="text-black ">Zip/Postal Code*</h1>
                      <input
                        placeholder="Street Address"
                        className="p-3 w-[300px] border border-solid"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </div>
                    <div>
                      <h1 className="text-black ">Phone Number*</h1>
                      <input
                        placeholder="Apartment Number"
                        className="p-3 w-[300px] border border-solid"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                      />
                    </div>
                  </div>
                  {contextHolder}
                  <button
                    className="mt-8 ml-5 bg-[#ed2a26] text-white text-[15px] px-7 py-3 hover:bg-[#333333] transition duration-300 rounded-lg"
                    type="submit"
                    disabled={loading}
                  >
                    Save Changes
                  </button>
                  {loading && <p>Loading...</p>}
                  {error && <p>Error: {error}</p>}
                  {user && <p>Update Successful!</p>}
                </div>
              </div>
            </div>
          </form>
          <div className="text-[#787878] bg-white h-auto w-[320px] mt-5 ml-5">
            <p>{firstName}{lastName}</p>
            <p>{academyname}</p>
            <p>{phonenumber}</p>
          </div>
        </div>
        <div className="bg-white w-[350px] h-[330px] ">
          <div className="mt-6 ml-5">
            <h1 className="text-xl font-bold mb-4 text-center md:text-left text-black">
              Order Summary
            </h1>
            <div className="w-10 h-0.5 bg-red-600 mb-4 mx-auto md:mx-0"></div>
          </div>
          <div className="mt-6 ml-5">
            <div className="flex">
              <h1 className="text-[16px] font-bold mb-4 text-center md:text-left text-black">
                Original Price
              </h1>
              <p className="text-[#686F7A] text-[16px] ml-auto mr-5">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <hr className="my-2 w-[310px] border-gray-300" />
          </div>
          <div className="mt-6 ml-5">
            <div className="flex">
              <h1 className="text-[16px] font-bold mb-4 text-center md:text-left text-[#686F7A]">
                Discount Price
              </h1>
              <p className="text-[#686F7A] text-[16px] ml-auto mr-5">$0</p>
            </div>
            <hr className="my-2 w-[310px] border-gray-300" />
          </div>
          <div className="mt-6 ml-5">
            <div className="flex">
              <h1 className="text-[18px] font-bold mb-4 text-center md:text-left text-black">
                Total
              </h1>
              <p className="text-black text-[18px] ml-auto mr-5">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <hr className="my-2 w-[310px] border-gray-300" />
          </div>
          <div className="text-center mt-5 ">
            <h1 className="text-[#686F7A] text-[16px]">
              <LockOutlined className="mr-2" />
              Secure checkout
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-5 mr-16">
        <div className="bg-white w-[750px] h-auto mt-10 pb-8">
          <div className="mt-6 ml-5">
            <h1 className="text-xl font-bold mb-4 text-center md:text-left text-black">
              Our Origins
            </h1>
            <div className="w-10 h-0.5 bg-red-600 mb-4 mx-auto md:mx-0"></div>
          </div>
          <div className="flex justify-center text-black text-[18px]">
            <div className="bg-white">
              <Button
                className={`w-[230px] h-[50px] bg-[#f3f2f2] text-center ${
                  activeTab === "credit"
                    ? "text-red-500 border-b-2 w-[230px] border-red-500 "
                    : ""
                }`}
                onClick={() => setActiveTab("credit")}
              >
                <CreditCardOutlined className="mr-2" />
                Credit/Debit Card
              </Button>
              <Button
                className={`w-[230px] h-[50px] bg-[#f3f2f2] text-center  ${
                  activeTab === "bank"
                    ? " text-red-500 border-b-2 border-red-500"
                    : ""
                }`}
                onClick={() => setActiveTab("bank")}
              >
                <BankOutlined className="mr-2" />
                Bank
              </Button>
              <Button
                className={`w-[230px] h-[50px] bg-[#f3f2f2] text-center ${
                  activeTab === "paypal"
                    ? " text-red-500 border-b-2 w-[230px] border-red-500 "
                    : ""
                }`}
                onClick={() => setActiveTab("paypal")}
              >
                {" "}
                <FontAwesomeIcon className="mr-2" icon={faPaypal} />
                Paypal
              </Button>
              <div className="">
                {activeTab === "credit" && <Credit />}
                {activeTab === "bank" && <Bank />}
                {activeTab === "paypal" && <Paypal />}
              </div>
            </div>
          </div>
          <hr className="mt-8 ml-7 w-[690px] border-gray-300" />
          <div className="mt-6 ml-5">
            <h1 className="text-xl font-bold mb-4 text-center md:text-left text-black">
              Order Details
            </h1>
            <div className="w-10 h-0.5 bg-red-600 mb-4 mx-auto md:mx-0"></div>
          </div>
          <div className="mt-6 ml-5">
            <div className="flex">
              <h1 className="text-[16px] font-bold mb-4 text-center md:text-left text-black">
                Original Price
              </h1>
              <p className="text-[#686F7A] text-[16px] ml-auto mr-5">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <hr className="my-2 w-[710px] border-gray-300" />
          </div>
          <div className="mt-6 ml-5">
            <div className="flex">
              <h1 className="text-[16px] font-bold mb-4 text-center md:text-left text-[#686F7A]">
                Discount Price
              </h1>
              <p className="text-[#686F7A] text-[16px] ml-auto mr-5">$0</p>
            </div>
            <hr className="my-2 w-[710px] border-gray-300" />
          </div>
          <div className="mt-6 ml-5">
            <div className="flex">
              <h1 className="text-[18px] font-bold mb-4 text-center md:text-left text-black">
                Total
              </h1>
              <p className="text-black text-[18px] ml-auto mr-5">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <hr className="my-2 w-[710px] border-gray-300" />
          </div>
          <div className="ml-[550px]">
            <button
              className="mt-8 bg-[#ed2a26] text-white text-[15px] px-7 py-3 hover:bg-[#333333] transition duration-300 rounded-lg"
              onClick={handleInvoice}
            >
              Confirm Checkout
            </button>
          </div>
        </div>
        <div className="w-[350px] "></div>
      </div>
    </div>
  );
};

export default Checkout;
