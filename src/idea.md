This syllabus is designed for High-Agency, Low-Syntax learners. The goal is not to train junior python developers, but to train Climate Product Managers and Strategy Leads who can direct AI agents to build sophisticated data tools.

**Course Philosophy:** You are the Architect; AI is your Junior Engineer.
**Core Tech Stack:** VS Code, Google Antigravity IDE, open-source AI coding assistants (Continue.dev), Streamlit, DuckDB (including spatial extensions), and LangChain.

---

# Course Title: AI-Augmented Data Science for Climate Leadership

**Duration:** 7 Weeks (14 Sessions, 2 hrs each)
**Format:** Studio Style – 20% Lecture, 80% Pair-Programming with AI Agents
**Prerequisites:** None (Logic & Strategy emphasized over Syntax)

## The Agent-First Methodology

We do not memorize `pandas` syntax. Instead, we learn to:

1. **Architect** the data flow (Input → Transformation → Insight).
2. **Prompt** the AI environment (VS Code with AI assistants) to generate the implementation.
3. **Audit** the output for hallucination and logic errors.
4. **Deploy** solutions using lightweight frameworks (Streamlit).

---

## The 14-Session Syllabus

### Module 1: The AI-Data Analyst (Structured Data)

*Goal: Build an interactive emissions dashboard in 4 sessions.*

**Session 1: IDE Setup and AI-Assisted Coding**

* **Concept:** Setting up VS Code with AI coding assistants (Continue.dev, GitHub Copilot). Using Google Antigravity IDE. Understanding how to work with AI-augmented development environments.
* **Tech:** VS Code, Continue.dev, Python Virtual Environments.
* **In-Class Lab:** Hello Climate. Download a raw CSV of Global Carbon Budget data. Use natural language prompts to load it, clean headers, and output a basic trend line.
* **Homework:** Install environment; pick a country and generate a 1-page markdown report on its emission trends using AI prompts.

**Session 2: Data Cleaning and Validation**

* **Concept:** AI writes code fast, but often writes wrong code. How to spot dirty data (missing values, wrong units).
* **Tech:** Pandas (via AI), Data Types, Unit Tests.
* **In-Class Lab:** The Energy Mix Audit. Students receive a broken dataset of renewable energy capacity. They must pair-program with AI to identify gaps, impute missing values safely, and standardize units (MW vs GW).
* **Key Takeaway:** Trust but Verify – writing tests to check AI's work.

**Session 3: Visual Storytelling & Dashboards**

* **Concept:** Dashboards as communication tools for decision-makers.
* **Tech:** Streamlit.
* **In-Class Lab:** Scope 3 Dashboard. Build a web app with a slider. Input: A company's revenue. Output: Estimated carbon intensity. AI generates the boilerplate; students refine the UI logic.

**Session 4: Working with Databases**

* **Concept:** Handling data too big for Excel.
* **Tech:** DuckDB (Serverless SQL).
* **In-Class Lab:** Grid Load Querying. Query a 1GB dataset of hourly electricity usage. Use AI to write the SQL query that finds peak demand hours without memorizing `SELECT` syntax.

---

### Module 2: The Climate Mapper (Spatial Intelligence)

*Goal: Visualize physical risk and asset locations.*

**Session 5: Introduction to Geospatial Data**

* **Concept:** Latitude, Longitude, and CRS (Coordinate Reference Systems). Why plotting points isn't enough.
* **Tech:** DuckDB Spatial extension, Python anymap library (maplibre wrapper).
* **In-Class Lab:** Asset Mapper. Map a list of 50 hypothetical factories. Color-code them by flood risk score.

**Session 6: Remote Sensing and Satellite Data**

* **Concept:** Using satellite data for climate applications.
* **Tech:** Rasterio, NASA POWER API.
* **In-Class Lab:** Solar Potential Scout. Give the AI coordinates for a proposed solar farm. Ask it to fetch historical cloud cover data from an API and calculate average peak sun hours.

**Session 7: Spatial Joins & Risk Layers**

* **Concept:** Overlapping data layers (e.g., which assets are in a wildfire zone).
* **Tech:** DuckDB Spatial Joins, maplibre for visualization (possibly deck.gl for 3D layers).
* **In-Class Lab:** Supply Chain Vulnerability. Overlay a map of critical infrastructure (ports/rail) with climate hazard heatmaps (sea level rise). Identify high-risk logistics hubs.

---

### Module 3: The AI Researcher (Unstructured Data & RAG)

*Goal: Parse thousands of pages of policy/ESG reports instantly.*

**Session 8: RAG for Document Analysis**

* **Concept:** Retrieval Augmented Generation. How to make an LLM answer questions based on your private documents, not the public internet.
* **Tech:** LangChain or LlamaIndex (Basic implementation).
* **In-Class Lab:** The ESG Auditor. Feed the AI a 100-page Sustainability Report. Build a script to extract: Net Zero Target Year and Scope 1 Baseline.

**Session 9: Web Scraping and Parsing**

* **Concept:** Monitoring competitors and regulatory changes automatically.
* **Tech:** Beautiful Soup (AI-generated scrapers).
* **In-Class Lab:** Policy Watchdog. Build a simple agent that checks a specific government URL for new PDF uploads (e.g., EPA updates) and alerts you if keywords like Methane appear.

**Session 10: Sentiment Analysis & Social Listening**

* **Concept:** Understanding public perception of green initiatives.
* **Tech:** OpenAI API / Sentiment libraries.
* **In-Class Lab:** Greenwashing Detector. Analyze a set of press releases vs. news articles. Score the optimism gap between what a company says vs. what the news says.

---

### Module 4: The Capstone Studio

*Goal: Build a deployable Minimum Viable Product (MVP).*

**Session 11: Project Scoping & Architecture**

* **Activity:** Whiteboarding with AI. Students prompt the AI to critique their project architecture.
* **Focus:** Feasibility check. Is the data available? Is the scope realistic for 2 weeks?

**Session 12: In-class Development Sprint**

* **Activity:** 2 hours of deep work. Instructors help unblock logic issues.
* **Focus:** Connecting the backend (Data processing) to the frontend (Streamlit dashboard).

**Session 13: Edge Cases & User Experience**

* **Activity:** Partner swap. Group A tests Group B's tool and tries to break it.
* **Focus:** Error handling. What happens if the user uploads a bad CSV? (AI creates the error messages).

**Session 14: Demo Day**

* **Format:** 5-minute demo per group.
* **Requirement:** Must demonstrate live code execution (no slide-ware).
* **Critique:** Focus on Actionable Insight – did this tool actually help a decision-maker?

---

## Tailored Tracks (Versions of the Course)

Since these are Masters students, they likely have different career vectors. You can offer flavors of the labs:

### Track A: Climate Fintech

* **Focus:** Risk quantification and TCFD reporting.
* **Key Datasets:** Stock prices, Carbon credit pricing history, physical asset locations.
* **Example Project:** Carbon Arbitrage Bot – A dashboard tracking the spread between EU ETS and voluntary carbon market prices.

### Track B: Policy & Operations

* **Focus:** Supply chain resilience and regulatory compliance.
* **Key Datasets:** Global shipping routes, extreme weather events, PDF regulation documents.
* **Example Project:** Regulation Radar – An app that ingests EU Directives and highlights clauses relevant to the user's specific industry sector.

## Sample Project: The Grid Decarbonizer

*A typical final project outcome.*

1. **Input:** User uploads their facility's hourly energy consumption (CSV).
2. **Processing:**
* App fetches real-time Grid Carbon Intensity data for that zip code (via API).
* App calculates the exact carbon footprint (Hour × Carbon Intensity).


3. **AI Insight:** The app suggests: Shift 20% of load from 4 PM to 2 AM to reduce carbon by 15% and cost by 10%.
4. **Output:** A PDF report generated automatically for the CFO.

## Pedagogical Guardrails for the Instructor

* **The 3-Prompt Rule:** If the AI doesn't give you the right code in 3 prompts, your logic is wrong. Stop prompting and draw the flow on paper.
* **Pair Programming:** Always work in pairs. One is the Driver (typing prompts), the other is the Navigator (checking the AI's logic and data quality).
* **No Black Boxes:** Students don't need to write the math for a regression, but they must be able to explain why the AI chose a linear regression vs. a random forest.
