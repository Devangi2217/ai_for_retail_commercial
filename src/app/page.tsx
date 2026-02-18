import ScenarioPanel from "@/components/ScenarioPanel";

export default function Home() {
  return (
    <div className="page">
      <nav className="nav">
        <div className="brand">AI for Retail</div>
        <div className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#scenario">Scenario Lab</a>
          <a href="#metrics">Metrics</a>
          <a href="#api">API</a>
        </div>
        <a className="button ghost" href="#contact">
          Contact
        </a>
      </nav>

      <header className="hero">
        <div>
          <div className="hero-tag">AI Decision Intelligence</div>
          <h1 className="hero-title">AI for Retail & Commercial Operations</h1>
          <p className="hero-copy">
            Build a decision platform that unifies demand forecasting, pricing signals,
            and marketplace risk into one command center. Empower teams to act faster
            with confident, data-backed recommendations.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#scenario">
              Launch Scenario Lab
            </a>
            <a className="button ghost" href="#metrics">
              View KPI Playbook
            </a>
          </div>
          <div className="pill-row">
            <span className="pill">Retail Intelligence</span>
            <span className="pill">Marketplace Ops</span>
            <span className="pill">Pricing AI</span>
            <span className="pill">Risk Monitoring</span>
          </div>
        </div>
        <div className="hero-cards">
          <div className="card">
            <div className="card-title">Market Pulse</div>
            <p className="card-copy">
              Track demand surges, category shifts, and regional pricing trends in real time.
            </p>
            <div className="pill-row">
              <span className="pill">+12% demand</span>
              <span className="pill">5 regions</span>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Pricing Intelligence</div>
            <p className="card-copy">
              Detect competitor moves, optimize promotion windows, and protect margin.
            </p>
            <div className="pill-row">
              <span className="pill">-9% erosion</span>
              <span className="pill">3 alerts</span>
            </div>
          </div>
        </div>
      </header>

      <section id="solutions">
        <h2 className="section-title">Solution Modules</h2>
        <div className="grid-3">
          <div className="card">
            <div className="card-title">Demand Intelligence</div>
            <p className="card-copy">
              Predict regional demand shifts and automate inventory rebalancing.
            </p>
          </div>
          <div className="card">
            <div className="card-title">Pricing Strategy</div>
            <p className="card-copy">
              Simulate price elasticity, promotion impact, and margin scenarios.
            </p>
          </div>
          <div className="card">
            <div className="card-title">Risk & Compliance</div>
            <p className="card-copy">
              Monitor fraud, returns, and policy violations across marketplaces.
            </p>
          </div>
        </div>
      </section>

      <section id="scenario">
        <h2 className="section-title">Scenario Lab</h2>
        <ScenarioPanel />
      </section>

      <section id="metrics">
        <h2 className="section-title">Executive Metrics Dashboard</h2>
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Revenue Forecast</div>
            <div className="kpi-value">$12.8M</div>
            <div className="kpi-note">+6.4% vs last month</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Promo ROI</div>
            <div className="kpi-value">3.8x</div>
            <div className="kpi-note">Top 3 campaigns</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Stockout Risk</div>
            <div className="kpi-value">14%</div>
            <div className="kpi-note">7 SKUs at risk</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Market Alerts</div>
            <div className="kpi-value">9</div>
            <div className="kpi-note">Live competitor moves</div>
          </div>
        </div>
      </section>

      <section id="api">
        <h2 className="section-title">Insights Feed</h2>
        <div className="card">
          <div className="card-title">Live Insight Feed</div>
          <p className="card-copy">
            Connect merchandising, pricing, and supply teams to a unified insights feed.
          </p>
          <div className="api-box">
            GET /insights.json {"{ ... }"}
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 className="section-title">Launch the Pilot</h2>
        <div className="card">
          <div className="card-title">Ready to build?</div>
          <p className="card-copy">
            This project can be extended with live data feeds, forecasting models, and
            custom dashboards for enterprise retail teams.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:youremail@example.com">
              Start a Pilot
            </a>
            <a className="button ghost" href="#scenario">
              Explore Scenarios
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 AI for Retail & Commercial</footer>
    </div>
  );
}
