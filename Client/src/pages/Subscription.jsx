import React from "react";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free Plan",
      price: "$0/month",
      features: [
        "🎧 Access to Basic Library",
        "📢 Ads Included",
        "🎶 Limited Skips",
        "⏬ No Offline Mode",
      ],
      buttonText: "Get Started",
      buttonVariant: "btn-outline-primary",
    },
    {
      name: "Premium",
      price: "$9.99/month",
      features: [
        "🎵 Unlimited Streaming",
        "🚫 No Ads",
        "🎼 High-Quality Audio",
        "⏬ Offline Mode Available",
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "btn-primary",
    },
    {
      name: "Family Plan",
      price: "$14.99/month",
      features: [
        "👨‍👩‍👧‍👦 Up to 6 Accounts",
        "🚫 No Ads",
        "🎶 Personalized Playlists",
        "⏬ Offline Mode for All",
      ],
      buttonText: "Get Family Plan",
      buttonVariant: "btn-success",
    },
  ];

  return (
    <div className="container text-center py-5">
      <h1 className="mb-4">Choose Your Plan</h1>
      <p className="text-muted mb-5">
        Get the best experience with our premium subscription.
      </p>

      <div className="row">
        {plans.map((plan, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-lg h-100">
              <div className="card-body">
                <h3 className="card-title">{plan.name}</h3>
                <h4 className="text-primary">{plan.price}</h4>
                <ul className="list-unstyled mt-3 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-muted">{feature}</li>
                  ))}
                </ul>
                <button
                  className={`btn ${plan.buttonVariant} w-100`}
                  onClick={() => navigate("/payment")}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
