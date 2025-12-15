import { useState } from "react";
import { Check } from "lucide-react";
// import {} from react-redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const user=useSelector(state=>state.auth.user);
  console.log(user);
  const navigate=useNavigate();


  const plans = [
    {
      name: "Pay as you go",
      price: "$0.99",
      subtitle: "1 Trial",
      description: ["Access core features", "No commitment"],
      cta: "Buy Trial",
      highlight: false,
    },
    {
      name: "Individual",
      monthly: 9.99,
      yearly: 101.9,
      subtitle: "50 Trials",
      description: ["Priority processing", "Best for individuals"],
      cta: "Get Individual",
      highlight: true,
    },
    {
      name: "Salon",
      monthly: 49.99,
      yearly: 509.9,
      subtitle: "Unlimited Trials",
      description: [
        "Unlimited usage",
        "Priority support",
        "For salons & teams",
      ],
      cta: "Start Salon",
      highlight: false,
    },
  ];

  function onHandlePrice(){
    console.log("this is price handler",user )
    if(!user){
      navigate("/login",{state:{message:"Please login to perform above action"}})
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-1xl md:text-5xl font-bold text-center mb-4 text-gray-900 header-text">
          Pricing Plans
        </h1>
        <p className="text-gray-500 text- text-center mb-10 header-text">
          Save 15% with yearly billing
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-14">
          <div className="bg-white shadow-md border border-gray-200 rounded-full p-1 flex">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                billing === "monthly"
                  ? "bg-orange-500 text-white"
                  : "text-gray-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                billing === "yearly"
                  ? "bg-orange-500 text-white"
                  : "text-gray-500"
              }`}
            >
              Yearly (15% OFF)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border p-8 bg-white/70 backdrop-blur shadow-xl transition ${
                plan.highlight
                  ? "border-orange-500 scale-105"
                  : "border-gray-200"
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              )}

              <h2 className="text-xl font-semibold mb-2 text-gray-900 header-text">
                {plan.name}
              </h2>
              <p className="text-gray-500 mb-6 header-text">{plan.subtitle}</p>

              {/* Price */}
              <div className="text-4xl font-bold mb-6 text-gray-900">
                {plan.price
                  ? plan.price
                  : billing === "monthly"
                  ? `$${plan.monthly}`
                  : `$${plan.yearly}`}
                {!plan.price && (
                  <span className="text-sm font-normal text-gray-500">
                    /{billing}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700 header-text text-xs"
                  >
                    <Check className="w-4 h-4 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                }`}

                onClick={onHandlePrice}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
