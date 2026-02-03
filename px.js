// trading view
const chart = LightweightCharts.createChart(
  document.getElementById('chart'),
  {
    layout: {
      background: { color: '#000000' },
      textColor: '#d1d4dc'
    },
    grid: {
      vertLines: { color: '#222' },
      horzLines: { color: '#222' }
    },
    timeScale: {
      timeVisible: true,
      secondsVisible: false
    }
  }
);

const series = chart.addLineSeries({
  color: '#4fd1c5',
  lineWidth: 2
});



// command
document.getElementById('cmd').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    handleCommand(e.target.value);
  }
});

function handleCommand(cmd) {
  // AAPL US <GO>
  const m = cmd.match(/^(\w+)\s+US/i);
  if (!m) return alert('Invalid command');

  loadPX(m[1]);
}



// call api
async function loadPX(ticker) {
  document.getElementById('ticker').textContent = ticker;

  const res = await fetch(
    `https://YOUR-RENDER-API.onrender.com/api/px?ticker=${ticker}`
  );
  const data = await res.json();

  series.setData(data.series);

  document.getElementById('px').textContent = data.last.toFixed(2);
  document.getElementById('chg').textContent = data.chg.toFixed(2);
  document.getElementById('chgPct').textContent =
    (data.chgPct * 100).toFixed(2) + '%';
}
