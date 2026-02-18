"use client";

import { useMemo, useState } from "react";

const scenarios = [
  {
    key: "demand-spike",
    label: "Demand Spike",
    summary: "Holiday spike in home & living across top regions.",
    kpis: [
      { label: "Projected Revenue", value: "$4.2M" },
      { label: "Stockout Risk", value: "18%" },
      { label: "Margin Impact", value: "+4.1%" },
    ],
    actions: [
      "Increase replenishment for top 12 SKUs.",
      "Boost paid search for high-converting categories.",
      "Update safety stock thresholds by region.",
    ],
  },
  {
    key: "price-erosion",
    label: "Price Erosion",
    summary: "Competitor undercuts key categories by 7-9%.",
    kpis: [
      { label: "Revenue Risk", value: "$1.1M" },
      { label: "Price Elasticity", value: "1.6x" },
      { label: "Promo Spend", value: "$220K" },
    ],
    actions: [
      "Launch targeted price-match for top 5 competitors.",
      "Shift bundles to protect margin while staying competitive.",
      "Review cart abandonment by price tier.",
    ],
  },
  {
    key: "supply-alert",
    label: "Supply Alert",
    summary: "Supplier delays for premium electronics parts.",
    kpis: [
      { label: "Delay Window", value: "9 days" },
      { label: "Revenue at Risk", value: "$780K" },
      { label: "Alt Vendor", value: "2 ready" },
    ],
    actions: [
      "Activate alternate supplier contracts.",
      "Reforecast fulfillment SLAs for premium SKUs.",
      "Notify marketplace partners with revised ETAs.",
    ],
  },
];

export default function ScenarioPanel() {
  const [activeKey, setActiveKey] = useState("demand-spike");

  const activeScenario = useMemo(
    () => scenarios.find((scenario) => scenario.key === activeKey) ?? scenarios[0],
    [activeKey]
  );

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="card-title">Scenario Simulator</div>
          <div className="card-copy">{activeScenario.summary}</div>
        </div>
        <div className="pill-row">
          {scenarios.map((scenario) => (
            <button
              key={scenario.key}
              type="button"
              onClick={() => setActiveKey(scenario.key)}
              className="pill"
              style={{
                borderColor: activeKey === scenario.key ? "#5af2c4" : "rgba(255,255,255,0.08)",
                color: activeKey === scenario.key ? "#02141d" : "inherit",
                background:
                  activeKey === scenario.key
                    ? "linear-gradient(120deg, #5af2c4, #4da3ff)"
                    : "rgba(15, 20, 36, 0.7)",
              }}
            >
              {scenario.label}
            </button>
          ))}
        </div>
      </div>
      <div className="kpi-grid" style={{ marginTop: 16 }}>
        {activeScenario.kpis.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <div className="kpi-label">{kpi.label}</div>
            <div className="kpi-value">{kpi.value}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
        {activeScenario.actions.map((action) => (
          <div key={action} className="card-copy">
            • {action}
          </div>
        ))}
      </div>
    </div>
  );
}
