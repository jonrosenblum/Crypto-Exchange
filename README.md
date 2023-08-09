<p align="center">
    <a href=""><img src="https://img.shields.io/pypi/l/ansicolortags.svg" /></a>
    <a href=""><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" /></a>
    <a href=""><img src="https://badgen.net/github/commits/jonrosenblum/NFL-Analytics-Dashboard" /></a>
    <br>
    <a href="https://docs.python.org/3/index.html"><img src="https://img.shields.io/badge/python-%2320232a?style=for-the-badge&logo=python&logoColor=ffdd54" /></a>
    <a href="https://dash-bootstrap-components.opensource.faculty.ai/"><img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /></a>
    <a href="https://plotly.com/dash/"><img src="https://img.shields.io/badge/dash-008DE4?style=for-the-badge&logo=dash&logoColor=white" /></a>
    <br>
    <a href=""><img src="https://img.shields.io/badge/Made%20with-Jupyter-orange?style=for-the-badge&logo=Jupyter" /></a>

</p>

<p align="center">
    <img src="screenshot.png" alt="CryptoX Screenshot" width=60%/>
</p>

<h1 align="center"><b>CryptoX</b></h1>
<h4 align="center">A user-friendly and secure crypto exchange platform for buying, selling, and trading various cryptocurrencies.</h4>

## Table of Contents

- [Introduction](#introduction)
- [Technical Requirements](#technical-requirements)
- [Project Structure](#project-structure)
- [Key Functionalities](#key-functionalities)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

A user-friendly and secure crypto exchange platform for buying, selling, and trading various cryptocurrencies.

## Technical Requirements

To run the NFL Player Statistics Dashboard locally, you need the following:

- Python 3.7 or later
- Dash 1.21.0 or later
- Plotly 5.0.0 or later
- Pandas 1.1.0 or later

## Project Directory Hierarchy

Upon successful setup (see **Getting Started**), you should see the following project directory hierarchy.

```
nfl-player-stats-dashboard/
├── data/
│ └── nfl_offensive_stats.csv
├── notebooks/
│ └── .ipynb_checkpoints/
│ │     └── .eda-checkpoints.ipynb
│ └── nfl-investigative_analysis.ipynb
├── app.py
├── OBJECTIVES.md
├── Pipfile
└── README.md
```

- `data/`: Directory containing the dataset `nfl_offensive_stats.csv`.
- `app.py`: Main application file containing the Dash app code and callbacks.
- `Pipfile` and `Pipfile.lock`: Files specifying project dependencies when using `pipenv`.
- `README.md`: Project documentation providing an overview, setup instructions, and other details.

## Key Functionalities

The NFL Player Statistics Dashboard offers the following functionalities:

- Choose a player's position: quarterbacks, running backs, or wide receivers.
- Select a specific player from the dropdown menu.
- Choose from various statistics for the selected player using radio items.
- View bar graphs illustrating the selected player's statistics over different game IDs.

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/jonrosenblum/Crypto-Exchange.git
```

2. Navigate to the project directory:

```bash
cd 
```

3. Install the required dependencies using _____:

```bash
-----
```

4. Run the app:

```bash
-------
```

## Usage

1. Choose a position (Quarterbacks, Running Backs, or Wide Receivers) from the tabs.
2. Select a player from the dropdown menu.
3. Use the radio items to choose the desired statistic.
4. Observe the corresponding bar graph showing the player's statistics.

## Dependencies

The NFL Player Statistics Dashboard relies on the following libraries:

- Dash: A web application framework for building interactive web applications with Python.
- Plotly: A graphing library for creating interactive, publication-quality graphs.
- Pandas: A data manipulation library for data analysis and manipulation.

## Contributing

Contributions to the NFL Player Statistics Dashboard are welcome! If you encounter any issues, have feature suggestions, or would like to contribute code, please open an issue or pull request on the GitHub repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
