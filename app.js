const exitBtn = document.getElementById("exitBtn");
const backBtn = document.getElementById("backBtn");
const landing = document.getElementById("landing");
const dashboard = document.getElementById("dashboard");
const landingCard = document.getElementById("landingCard");
const loginActions = document.getElementById("loginActions");
const loginReveal = document.getElementById("loginReveal");
const cancelLogin = document.getElementById("cancelLogin");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");
const detailModal = document.getElementById("detailModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalCurrent = document.getElementById("modalCurrent");
const modalHistory = document.getElementById("modalHistory");
const modalBars = document.getElementById("modalBars");

const AUTH_USERNAME = "Shaneethan200@gmail.com";
const AUTH_PASSWORD = "Shane200";

const expensesData = [
  {
    label: "Housing",
    value: 28,
    color: "#111111",
    history: [
      { month: "Nov 2025", value: 26 },
      { month: "Dec 2025", value: 27 },
      { month: "Jan 2026", value: 28 },
      { month: "Feb 2026", value: 27 },
      { month: "Mar 2026", value: 28 },
    ],
  },
  {
    label: "Groceries",
    value: 14,
    color: "#4d4d4d",
    history: [
      { month: "Nov 2025", value: 13 },
      { month: "Dec 2025", value: 14 },
      { month: "Jan 2026", value: 15 },
      { month: "Feb 2026", value: 14 },
      { month: "Mar 2026", value: 14 },
    ],
  },
  {
    label: "Utilities",
    value: 9,
    color: "#7a7a7a",
    history: [
      { month: "Nov 2025", value: 10 },
      { month: "Dec 2025", value: 9 },
      { month: "Jan 2026", value: 9 },
      { month: "Feb 2026", value: 8 },
      { month: "Mar 2026", value: 9 },
    ],
  },
  {
    label: "Transport",
    value: 8,
    color: "#a0a0a0",
    history: [
      { month: "Nov 2025", value: 7 },
      { month: "Dec 2025", value: 8 },
      { month: "Jan 2026", value: 8 },
      { month: "Feb 2026", value: 7 },
      { month: "Mar 2026", value: 8 },
    ],
  },
  {
    label: "Shopping",
    value: 16,
    color: "#303030",
    history: [
      { month: "Nov 2025", value: 14 },
      { month: "Dec 2025", value: 18 },
      { month: "Jan 2026", value: 15 },
      { month: "Feb 2026", value: 17 },
      { month: "Mar 2026", value: 16 },
    ],
  },
  {
    label: "Health",
    value: 7,
    color: "#5e5e5e",
    history: [
      { month: "Nov 2025", value: 6 },
      { month: "Dec 2025", value: 7 },
      { month: "Jan 2026", value: 7 },
      { month: "Feb 2026", value: 6 },
      { month: "Mar 2026", value: 7 },
    ],
  },
  {
    label: "Entertainment",
    value: 10,
    color: "#8c8c8c",
    history: [
      { month: "Nov 2025", value: 9 },
      { month: "Dec 2025", value: 11 },
      { month: "Jan 2026", value: 10 },
      { month: "Feb 2026", value: 9 },
      { month: "Mar 2026", value: 10 },
    ],
  },
  {
    label: "Other",
    value: 8,
    color: "#b3b3b3",
    history: [
      { month: "Nov 2025", value: 9 },
      { month: "Dec 2025", value: 6 },
      { month: "Jan 2026", value: 8 },
      { month: "Feb 2026", value: 9 },
      { month: "Mar 2026", value: 8 },
    ],
  },
];

const incomeData = [
  {
    label: "Savings",
    value: 22,
    color: "#111111",
    history: [
      { month: "Nov 2025", value: 20 },
      { month: "Dec 2025", value: 19 },
      { month: "Jan 2026", value: 21 },
      { month: "Feb 2026", value: 20 },
      { month: "Mar 2026", value: 22 },
    ],
  },
  {
    label: "Disposable Income",
    value: 18,
    color: "#4d4d4d",
    history: [
      { month: "Nov 2025", value: 19 },
      { month: "Dec 2025", value: 18 },
      { month: "Jan 2026", value: 17 },
      { month: "Feb 2026", value: 19 },
      { month: "Mar 2026", value: 18 },
    ],
  },
  {
    label: "Taxes",
    value: 20,
    color: "#7a7a7a",
    history: [
      { month: "Nov 2025", value: 21 },
      { month: "Dec 2025", value: 22 },
      { month: "Jan 2026", value: 20 },
      { month: "Feb 2026", value: 21 },
      { month: "Mar 2026", value: 20 },
    ],
  },
  {
    label: "Expenses",
    value: 40,
    color: "#b3b3b3",
    history: [
      { month: "Nov 2025", value: 40 },
      { month: "Dec 2025", value: 41 },
      { month: "Jan 2026", value: 42 },
      { month: "Feb 2026", value: 40 },
      { month: "Mar 2026", value: 40 },
    ],
  },
];

const openModal = (slice, currentPercent, chartTitle) => {
  modalTitle.textContent = slice.label;
  modalSubtitle.textContent = chartTitle;
  modalCurrent.textContent = `${currentPercent.toFixed(1)}%`;
  modalHistory.innerHTML = "";
  modalBars.innerHTML = "";

  if (slice.history) {
    const maxValue = Math.max(...slice.history.map((row) => row.value));

    slice.history.forEach((row) => {
      const line = document.createElement("div");
      line.className = "history-row";

      const month = document.createElement("span");
      month.textContent = row.month;

      const value = document.createElement("span");
      value.textContent = `${row.value.toFixed(1)}%`;

      line.appendChild(month);
      line.appendChild(value);
      modalHistory.appendChild(line);

      const bar = document.createElement("div");
      bar.className = "history-bar";

      const barFill = document.createElement("div");
      barFill.className = "history-bar-fill";
      barFill.style.height = `${(row.value / maxValue) * 100}%`;

      const barLabel = document.createElement("span");
      barLabel.textContent = row.month;

      bar.appendChild(barFill);
      bar.appendChild(barLabel);
      modalBars.appendChild(bar);
    });
  }

  detailModal.classList.remove("hidden");
  detailModal.setAttribute("aria-hidden", "false");
};

const hideModal = () => {
  detailModal.classList.add("hidden");
  detailModal.setAttribute("aria-hidden", "true");
};

const polarToCartesian = (cx, cy, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (cx, cy, radius, startAngle, endAngle) => {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
};

const buildPie = (config) => {
  const { data, chartId, legendId, centerId, centerLabel, chartTitle } = config;
  const pieChart = document.getElementById(chartId);
  const legend = document.getElementById(legendId);
  const centerValue = document.getElementById(centerId);

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const slices = data
    .map((item) => {
      const percent = (item.value / total) * 100;
      return { ...item, percent };
    })
    .reduce((acc, item, index) => {
      const start = index === 0 ? 0 : acc[acc.length - 1].end;
      const end = start + item.percent;
      acc.push({ ...item, start, end });
      return acc;
    }, []);

  const gradientStops = slices
    .map((slice) => `${slice.color} ${slice.start}% ${slice.end}%`)
    .join(", ");

  pieChart.style.background = `conic-gradient(${gradientStops})`;

  pieChart.innerHTML = "";
  const size = 220;
  const radius = size / 2;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
  svg.setAttribute("width", `${size}`);
  svg.setAttribute("height", `${size}`);

  slices.forEach((slice) => {
    const startAngle = (slice.start / 100) * 360;
    const endAngle = (slice.end / 100) * 360;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", describeArc(radius, radius, radius, startAngle, endAngle));
    path.setAttribute("fill", slice.color);
    path.setAttribute("data-label", slice.label);
    path.style.cursor = "pointer";
    path.addEventListener("click", () => openModal(slice, slice.percent, chartTitle));
    svg.appendChild(path);
  });

  pieChart.appendChild(svg);

  const centerSlice = slices.find((slice) => slice.label === centerLabel) || slices[0];
  centerValue.textContent = `${centerSlice.percent.toFixed(1)}%`;

  legend.innerHTML = "";

  slices.forEach((slice) => {
    const item = document.createElement("div");
    item.className = "legend-item";

    const left = document.createElement("div");
    left.className = "legend-left";

    const dot = document.createElement("span");
    dot.className = "legend-dot";
    dot.style.background = slice.color;

    const name = document.createElement("span");
    name.textContent = slice.label;

    left.appendChild(dot);
    left.appendChild(name);

    const right = document.createElement("span");
    right.className = "legend-right";
    right.textContent = `${slice.percent.toFixed(1)}%`;

    item.appendChild(left);
    item.appendChild(right);
    item.addEventListener("click", () => openModal(slice, slice.percent, chartTitle));
    legend.appendChild(item);
  });
};

const showDashboard = () => {
  landing.classList.add("hidden");
  dashboard.classList.remove("hidden");

  buildPie({
    data: expensesData,
    chartId: "expensesChart",
    legendId: "expensesLegend",
    centerId: "expensesValue",
    centerLabel: "Housing",
    chartTitle: "Monthly Expenses",
  });

  buildPie({
    data: incomeData,
    chartId: "incomeChart",
    legendId: "incomeLegend",
    centerId: "incomeValue",
    centerLabel: "Savings",
    chartTitle: "Income Allocation",
  });
};

const showLanding = () => {
  dashboard.classList.add("hidden");
  landing.classList.remove("hidden");
};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    loginError.classList.remove("hidden");
    return;
  }

  if (username !== AUTH_USERNAME || password !== AUTH_PASSWORD) {
    loginError.textContent = "Incorrect username or password.";
    loginError.classList.remove("hidden");
    return;
  }

  loginError.textContent = "Enter a username and password to continue.";
  loginError.classList.add("hidden");
  showDashboard();
});

loginReveal.addEventListener("click", () => {
  loginActions.classList.add("hidden");
  loginForm.classList.remove("hidden");
  loginError.classList.add("hidden");
  usernameInput.focus();
});

cancelLogin.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  loginActions.classList.remove("hidden");
  loginError.classList.add("hidden");
  usernameInput.value = "";
  passwordInput.value = "";
});
backBtn.addEventListener("click", showLanding);
exitBtn.addEventListener("click", () => {
  window.location.href = "about:blank";
});

window.addEventListener("load", () => {
  setTimeout(() => {
    landingCard.classList.remove("hidden");
  }, 3000);
});

closeModal.addEventListener("click", () => {
  hideModal();
});

detailModal.addEventListener("click", (event) => {
  if (event.target === detailModal) {
    hideModal();
  }
});
