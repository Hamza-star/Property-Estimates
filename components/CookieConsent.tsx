"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    ads: false,
    functional: true, // always true
  });
  const [openPreferences, setOpenPreferences] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-preferences");
    if (!saved) {
      setShow(true);
    } else {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    if (value === "accepted") {
      localStorage.setItem(
        "cookie-preferences",
        JSON.stringify({
          analytics: true,
          ads: true,
          functional: true,
        })
      );
    } else {
      localStorage.setItem(
        "cookie-preferences",
        JSON.stringify({
          analytics: false,
          ads: false,
          functional: true,
        })
      );
    }
    setShow(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    setShow(false);
    setOpenPreferences(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 w-[320px] p-5 rounded-2xl 
                     bg-white/70 backdrop-blur-xl shadow-xl border border-white/40
                     text-gray-800 z-[100]"
        >
          {!openPreferences ? (
            <>
              <h3 className="font-semibold text-lg mb-2">
                We value your privacy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We use cookies to improve your experience, analyze site traffic,
                and show relevant ads. Manage your preferences anytime.
              </p>
              <div className="flex justify-between gap-2">
                <button
                  onClick={() => handleConsent("declined")}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 
                             hover:bg-gray-100 text-sm transition"
                >
                  Decline
                </button>
                <button
                  onClick={() => setOpenPreferences(true)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 
                             hover:bg-gray-100 text-sm transition"
                >
                  Preferences
                </button>
                <button
                  onClick={() => handleConsent("accepted")}
                  className="px-4 py-2 rounded-lg bg-[#EA5501] text-white text-sm 
                             shadow hover:bg-[#d44900] transition"
                >
                  Accept
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-lg mb-4">Cookie Preferences</h3>
              <div className="space-y-3 mb-4">
                <label className="flex justify-between items-center">
                  <span className="text-sm">Functional Cookies (required)</span>
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="accent-[#EA5501]"
                  />
                </label>
                <label className="flex justify-between items-center">
                  <span className="text-sm">Analytics Cookies</span>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        analytics: e.target.checked,
                      })
                    }
                    className="accent-[#EA5501]"
                  />
                </label>
                <label className="flex justify-between items-center">
                  <span className="text-sm">Ads Cookies</span>
                  <input
                    type="checkbox"
                    checked={preferences.ads}
                    onChange={(e) =>
                      setPreferences({ ...preferences, ads: e.target.checked })
                    }
                    className="accent-[#EA5501]"
                  />
                </label>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setOpenPreferences(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 
                             hover:bg-gray-100 text-sm transition"
                >
                  Back
                </button>
                <button
                  onClick={savePreferences}
                  className="px-4 py-2 rounded-lg bg-[#EA5501] text-white text-sm 
                             shadow hover:bg-[#d44900] transition"
                >
                  Save Preferences
                </button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
