<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>💱 Currency Converter & Exchange Rate Tracker 📊</h1>
<p>A Flask-based currency converter application that allows users to convert currencies in real time, track exchange rate history, set alerts, and visualize currency trends using Matplotlib.</p>

<h2>📋 Features</h2>
<ul>
  <li><strong>Real-time Currency Conversion</strong>: Fetches live exchange rates and converts amounts between different currencies.</li>
  <li><strong>Conversion History</strong>: Stores past conversions for reference.</li>
  <li><strong>Rate Alerts</strong>: Users can set alerts for specific exchange rate thresholds.</li>
  <li><strong>Graph Visualization</strong>: Generates a graph of exchange rates to analyze trends.</li>
  <li><strong>RESTful API</strong>: Provides endpoints for currency conversion, history retrieval, alerts, and graph generation.</li>
</ul>

<h2>🛠️ Technologies Used</h2>
<ul>
  <li><strong>Python</strong> - Core programming language</li>
  <li><strong>Flask</strong> - Backend framework</li>
  <li><strong>Matplotlib</strong> - Data visualization for exchange rate graphs</li>
  <li><strong>Requests</strong> - Fetching exchange rate data from external APIs</li>
  <li><strong>Flask-CORS</strong> - Enabling cross-origin requests</li>
</ul>

<h2>🚀 How to Run</h2>
<ol>
  <li>Ensure Python is installed on your system.</li>
  <li>Install required dependencies: <code>pip install flask requests matplotlib flask-cors</code></li>
  <li>Run the script: <code>python app.py</code></li>
  <li>Access the API endpoints via a browser or API testing tool.</li>
</ol>

<h2>📈 API Endpoints</h2>
<ul>
  <li><strong>/convert</strong> - Converts currency based on real-time exchange rates.</li>
  <li><strong>/history</strong> - Retrieves past conversion records.</li>
  <li><strong>/set_alert</strong> - Allows users to set rate alerts.</li>
  <li><strong>/graph</strong> - Generates and returns a graphical representation of exchange rate trends.</li>
</ul>

<h2>📌 Future Enhancements</h2>
<ul>
  <li>Implement user authentication for personalized tracking.</li>
  <li>Integrate a database to store conversion history and alerts.</li>
  <li>Enhance graph visualization with more detailed historical data.</li>
</ul>

<h2>📜 License</h2>
<p>This project is open-source and free to use.</p>

</body>
</html>
