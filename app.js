/**
 * Wisebyte Interactive Prototype
 * Logic & State Engine (English Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // PLAN DATABASE
  // ==========================================
  const PLANS_DB = {
    combo50: {
      id: 'combo50',
      name: 'Combo 50',
      quota: '50 GB',
      quotaNum: 50,
      price: 'Rp 89.000',
      priceNum: 89000,
      validity: '30 days',
      mainQuota: '40 GB Main',
      appsQuota: '10 GB Apps & Social',
      ratePerGb: 'Rp 1,780 / GB',
      voice: 'Unlimited Same + 100 mins',
      score: '4.8',
      recommendRate: '96% of users recommend this plan',
      benefits: [
        '40 GB Main Quota valid 24 hours on all 2G/3G/4G/5G networks with no regional restrictions.',
        '10 GB Dedicated App Quota for YouTube, TikTok, Instagram, WhatsApp, and Netflix.',
        'Unlimited Voice Calls to same provider & 100 minutes to all other mobile operators.'
      ]
    },
    freedom45: {
      id: 'freedom45',
      name: 'Freedom 45',
      quota: '45 GB',
      quotaNum: 45,
      price: 'Rp 84.000',
      priceNum: 84000,
      validity: '30 days',
      mainQuota: '35 GB Main',
      appsQuota: '10 GB Apps',
      ratePerGb: 'Rp 1,866 / GB',
      voice: '60 mins All-Operator',
      score: '4.7',
      recommendRate: '95% of users satisfied',
      benefits: [
        '35 GB Main Quota valid 24 hours across all mobile networks.',
        '10 GB Dedicated Quota for Social Media & Chat applications.',
        'Free 60 minutes voice calls to all mobile operators.'
      ]
    },
    combosakti45: {
      id: 'combosakti45',
      name: 'Combo Sakti 45',
      quota: '45 GB',
      quotaNum: 45,
      price: 'Rp 80.000',
      priceNum: 80000,
      validity: '30 days',
      mainQuota: '35 GB Main',
      appsQuota: '10 GB Apps',
      ratePerGb: 'Rp 1,777 / GB',
      voice: '50 mins Voice',
      score: '4.6',
      recommendRate: '89% of users satisfied',
      benefits: [
        '35 GB Nationwide Main Internet Quota.',
        '10 GB Streaming & Social Media Quota.',
        '50 minutes voice call allocation.'
      ]
    },
    comboflex40: {
      id: 'comboflex40',
      name: 'Combo Flex 40',
      quota: '40 GB',
      quotaNum: 40,
      price: 'Rp 75.000',
      priceNum: 75000,
      validity: '30 days',
      mainQuota: '30 GB Main',
      appsQuota: '10 GB Flex',
      ratePerGb: 'Rp 1,875 / GB',
      voice: '30 mins Voice',
      score: '4.5',
      recommendRate: '81% of users satisfied',
      benefits: [
        '30 GB 24-hour Main Quota.',
        '10 GB Flexible Quota for selectable favorite apps.',
        '30 minutes voice calls to any operator.'
      ]
    },
    extracombo45: {
      id: 'extracombo45',
      name: 'Extra Combo Flex 45',
      quota: '45 GB',
      quotaNum: 45,
      price: 'Rp 80.000',
      priceNum: 80000,
      validity: '30 days',
      mainQuota: '35 GB Main',
      appsQuota: '10 GB Apps Flex',
      ratePerGb: 'Rp 1,777 / GB',
      voice: '50 mins Voice',
      score: '4.7',
      recommendRate: '92% of users satisfied',
      benefits: [
        '35 GB Nationwide Main Quota.',
        '10 GB Extra Application Quota.',
        'Night bonus quota 5 GB included.'
      ]
    },
    freedominternet45: {
      id: 'freedominternet45',
      name: 'Freedom Internet 45',
      quota: '45 GB',
      quotaNum: 45,
      price: 'Rp 84.500',
      priceNum: 84500,
      validity: '30 days',
      mainQuota: '45 GB Pure',
      appsQuota: '0 GB (100% Pure)',
      ratePerGb: 'Rp 1,877 / GB',
      voice: 'None',
      score: '4.8',
      recommendRate: '94% of users satisfied',
      benefits: [
        '100% Pure Main Quota 45 GB with zero time or app division.',
        '24/7 high-speed internet across all regions.',
        'Balance-safe protection when quota expires.'
      ]
    },
    combosakti48: {
      id: 'combosakti48',
      name: 'Combo Sakti 48',
      quota: '48 GB',
      quotaNum: 48,
      price: 'Rp 88.000',
      priceNum: 88000,
      validity: '30 days',
      mainQuota: '38 GB Main',
      appsQuota: '10 GB Social',
      ratePerGb: 'Rp 1,833 / GB',
      voice: '75 mins Voice',
      score: '4.7',
      recommendRate: '91% of users satisfied',
      benefits: [
        '38 GB 24-hour Main Data Quota.',
        '10 GB Social Media Quota.',
        '75 minutes voice call & 100 SMS.'
      ]
    },
    superseru50: {
      id: 'superseru50',
      name: 'Super Seru Combo 50',
      quota: '50 GB',
      quotaNum: 50,
      price: 'Rp 94.000',
      priceNum: 94000,
      validity: '30 days',
      mainQuota: '50 GB All Network',
      appsQuota: 'Uncapped Apps',
      ratePerGb: 'Rp 1,880 / GB',
      voice: 'Unlimited Same Provider',
      score: '4.9',
      recommendRate: '98% of users satisfied',
      benefits: [
        '50 GB All Network maximum speed quota with no FUP throttling.',
        'Free unlimited calls to same provider.',
        'Network bandwidth priority during peak hours.'
      ]
    }
  };

  // State
  let currentScreenId = 'screen-home';
  let historyStack = ['screen-home'];
  let selectedPlanForDetails = PLANS_DB.combo50;
  let currentBudget = 85000;

  // DOM Elements
  const screens = document.querySelectorAll('.proto-screen');
  const screenSelect = document.getElementById('screenSelect');
  const btnDeviceView = document.getElementById('btnDeviceView');
  const btnArtboardsView = document.getElementById('btnArtboardsView');
  const btnHotspotsToggle = document.getElementById('btnHotspotsToggle');
  const btnRestart = document.getElementById('btnRestart');
  const statusClock = document.getElementById('statusClock');
  const toastContainer = document.getElementById('toastContainer');

  // Modal elements
  const checkoutBackdrop = document.getElementById('checkoutBackdrop');
  const btnCloseSheet = document.getElementById('btnCloseSheet');
  const btnConfirmPay = document.getElementById('btnConfirmPay');
  const successOverlay = document.getElementById('successOverlay');
  const btnBackToHome = document.getElementById('btnBackToHome');

  // ==========================================
  // REAL-TIME STATUS CLOCK
  // ==========================================
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    if (statusClock) {
      statusClock.textContent = `${hours}:${minutes}`;
    }
  }
  updateClock();
  setInterval(updateClock, 30000);

  // ==========================================
  // TOAST NOTIFICATION HELPER
  // ==========================================
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D2F834" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'opacity 0.2s, transform 0.2s';
      setTimeout(() => toast.remove(), 200);
    }, 2800);
  }

  // ==========================================
  // SCREEN NAVIGATION ENGINE
  // ==========================================
  function navigateTo(targetId, addToHistory = true) {
    const targetScreen = document.getElementById(targetId);
    if (!targetScreen) return;

    screens.forEach(screen => {
      screen.classList.remove('active');
    });

    targetScreen.classList.add('active');
    targetScreen.querySelector('.screen-scrollable')?.scrollTo({ top: 0, behavior: 'instant' });

    currentScreenId = targetId;
    if (addToHistory && historyStack[historyStack.length - 1] !== targetId) {
      historyStack.push(targetId);
    }

    if (screenSelect) {
      screenSelect.value = targetId;
    }
  }

  function goBack() {
    if (historyStack.length > 1) {
      historyStack.pop();
      const prevScreenId = historyStack[historyStack.length - 1];
      navigateTo(prevScreenId, false);
    } else {
      navigateTo('screen-home', false);
    }
  }

  // Attach generic click handler for hotspot items
  document.addEventListener('click', (e) => {
    const hotspot = e.target.closest('.hotspot-item, .hotspot-card');
    if (!hotspot) return;

    // Check if it has a target
    const target = hotspot.getAttribute('data-target');
    if (target) {
      e.preventDefault();

      // Check for preselected plan in compare
      const preselect = hotspot.getAttribute('data-preselect');
      if (preselect && target === 'screen-compare') {
        const selectA = document.getElementById('compareSelectA');
        if (selectA) {
          selectA.value = preselect;
          updateCompareMatrix();
        }
      }

      // Check for plan details view
      const planId = hotspot.getAttribute('data-plan');
      if (planId && target === 'screen-details') {
        loadPlanDetails(planId);
      }

      // If it's a back button
      if (hotspot.classList.contains('back-circle-btn')) {
        goBack();
        return;
      }

      navigateTo(target);
    }
  });

  // Top screen dropdown sync
  if (screenSelect) {
    screenSelect.addEventListener('change', (e) => {
      navigateTo(e.target.value);
    });
  }

  // Restart Button
  if (btnRestart) {
    btnRestart.addEventListener('click', () => {
      historyStack = ['screen-home'];
      navigateTo('screen-home', false);
      showToast('Prototype reset to initial screen');
    });
  }

  // Hotspots Toggle
  if (btnHotspotsToggle) {
    btnHotspotsToggle.addEventListener('click', () => {
      document.body.classList.toggle('show-hotspots');
      const isActive = document.body.classList.contains('show-hotspots');
      btnHotspotsToggle.classList.toggle('active', isActive);
      btnHotspotsToggle.setAttribute('aria-pressed', isActive);
      showToast(isActive ? 'Hotspot interaction guides enabled' : 'Hotspot guides hidden');
    });
  }

  // ==========================================
  // VIEW MODE: SMARTPHONE VS ARTBOARDS CANVAS
  // ==========================================
  btnDeviceView?.addEventListener('click', () => {
    document.body.className = 'mode-device';
    btnDeviceView.classList.add('active');
    btnArtboardsView.classList.remove('active');
  });

  btnArtboardsView?.addEventListener('click', () => {
    document.body.className = 'mode-artboards';
    btnArtboardsView.classList.add('active');
    btnDeviceView.classList.remove('active');
    renderArtboardsGallery();
  });

  function renderArtboardsGallery() {
    const grid = document.getElementById('artboardsGrid');
    if (!grid || grid.children.length > 0) return;

    screens.forEach((screen, index) => {
      const screenTitle = screen.getAttribute('data-screen-title') || `Screen ${index + 1}`;
      const screenId = screen.id;

      const tile = document.createElement('div');
      tile.className = 'artboard-tile';
      tile.innerHTML = `
        <div class="artboard-tile-header">
          <span class="artboard-num">#${index + 1}</span>
          <span class="artboard-name">${screenTitle}</span>
        </div>
        <div class="artboard-tile-body">
          ${screen.outerHTML}
        </div>
      `;

      // Clicking tile switches to device view and navigates to that screen
      tile.addEventListener('click', () => {
        document.body.className = 'mode-device';
        btnDeviceView.classList.add('active');
        btnArtboardsView.classList.remove('active');
        navigateTo(screenId);
        showToast(`Opening ${screenTitle}`);
      });

      grid.appendChild(tile);
    });
  }

  // ==========================================
  // SCREEN 2: RECOMMENDATION PACKAGE LOGIC
  // ==========================================
  const budgetInput = document.getElementById('budgetInputVal');
  const btnBudgetMinus = document.getElementById('btnBudgetMinus');
  const btnBudgetPlus = document.getElementById('btnBudgetPlus');
  const budgetMatchPct = document.getElementById('budgetMatchPct');
  const budgetMatchSpec = document.getElementById('budgetMatchSpec');

  function updateBudgetDisplay() {
    if (budgetInput) {
      budgetInput.value = currentBudget.toLocaleString('en-US');
    }

    if (currentBudget <= 70000) {
      if (budgetMatchPct) budgetMatchPct.textContent = '82%';
      if (budgetMatchSpec) budgetMatchSpec.textContent = '15-20 GB • Rp 60-70K';
    } else if (currentBudget <= 85000) {
      if (budgetMatchPct) budgetMatchPct.textContent = '86%';
      if (budgetMatchSpec) budgetMatchSpec.textContent = '25-30 GB • Rp 75-85K';
    } else if (currentBudget <= 100000) {
      if (budgetMatchPct) budgetMatchPct.textContent = '94%';
      if (budgetMatchSpec) budgetMatchSpec.textContent = '40-50 GB • Rp 85-95K';
    } else {
      if (budgetMatchPct) budgetMatchPct.textContent = '98%';
      if (budgetMatchSpec) budgetMatchSpec.textContent = '50-65 GB • Rp 100-120K';
    }
  }

  btnBudgetMinus?.addEventListener('click', () => {
    if (currentBudget > 40000) {
      currentBudget -= 10000;
      updateBudgetDisplay();
    }
  });

  btnBudgetPlus?.addEventListener('click', () => {
    if (currentBudget < 250000) {
      currentBudget += 10000;
      updateBudgetDisplay();
    }
  });

  // Category and duration pills toggle
  document.querySelectorAll('#categoryPillsRow .cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#categoryPillsRow .cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      showToast(`Category: ${pill.textContent.trim()}`);
    });
  });

  document.querySelectorAll('#durationPillsRow .dur-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#durationPillsRow .dur-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      showToast(`Duration: ${pill.textContent.trim()}`);
    });
  });

  // ==========================================
  // SCREEN 3: CALCULATOR ENGINE
  // ==========================================
  const rangeVideo = document.getElementById('rangeVideo');
  const rangeSocial = document.getElementById('rangeSocial');
  const rangeCalls = document.getElementById('rangeCalls');

  const valVideo = document.getElementById('valVideo');
  const valSocial = document.getElementById('valSocial');
  const valCalls = document.getElementById('valCalls');

  const metricEstGb = document.getElementById('metricEstGb');
  const metricEstDaily = document.getElementById('metricEstDaily');
  const metricEstPlanRange = document.getElementById('metricEstPlanRange');
  const btnViewEstimatedLabel = document.getElementById('btnViewEstimatedLabel');

  function calculateConsumption() {
    const videoHrs = parseFloat(rangeVideo?.value || 2);
    const socialHrs = parseFloat(rangeSocial?.value || 2);
    const callsWeeklyHrs = parseFloat(rangeCalls?.value || 4);

    if (valVideo) valVideo.textContent = `${videoHrs} hrs / day`;
    if (valSocial) valSocial.textContent = `${socialHrs} hrs / day`;
    if (valCalls) valCalls.textContent = `${callsWeeklyHrs} hrs / week`;

    // Formula targeting exact default 42.8 GB from Figma
    const videoGb = videoHrs * 14.5;
    const socialGb = socialHrs * 4.8;
    const callsGb = (callsWeeklyHrs / 4) * 2.2;
    const baseGb = 2.0;

    const totalGb = (videoGb + socialGb + callsGb + baseGb).toFixed(1);
    const dailyAvg = (totalGb / 30).toFixed(2);

    if (metricEstGb) metricEstGb.textContent = `${totalGb} GB`;
    if (metricEstDaily) metricEstDaily.textContent = `${dailyAvg} GB / day`;

    let planRange = '40-50 GB Plans';
    if (totalGb < 25) planRange = '20-30 GB Plans';
    else if (totalGb < 40) planRange = '30-40 GB Plans';
    else if (totalGb < 55) planRange = '40-50 GB Plans';
    else planRange = '50-65 GB Plans';

    if (metricEstPlanRange) metricEstPlanRange.textContent = `Recommended: ${planRange}`;
    if (btnViewEstimatedLabel) btnViewEstimatedLabel.textContent = `View Our ${planRange}`;
  }

  rangeVideo?.addEventListener('input', calculateConsumption);
  rangeSocial?.addEventListener('input', calculateConsumption);
  rangeCalls?.addEventListener('input', calculateConsumption);

  // ==========================================
  // SCREEN 6: COMPARE MATRIX ENGINE
  // ==========================================
  const compareSelectA = document.getElementById('compareSelectA');
  const compareSelectB = document.getElementById('compareSelectB');
  const colHeaderA = document.getElementById('colHeaderA');
  const colHeaderB = document.getElementById('colHeaderB');
  const compareTableBody = document.getElementById('compareTableBody');
  const verdictTitle = document.getElementById('verdictTitle');
  const verdictDesc = document.getElementById('verdictDesc');
  const labelChoosePlanA = document.getElementById('labelChoosePlanA');
  const labelChoosePlanB = document.getElementById('labelChoosePlanB');
  const btnChoosePlanA = document.getElementById('btnChoosePlanA');
  const btnChoosePlanB = document.getElementById('btnChoosePlanB');

  function updateCompareMatrix() {
    const planAKey = compareSelectA?.value || 'freedom45';
    const planBKey = compareSelectB?.value || 'combo50';

    const pA = PLANS_DB[planAKey] || PLANS_DB.freedom45;
    const pB = PLANS_DB[planBKey] || PLANS_DB.combo50;

    if (colHeaderA) colHeaderA.textContent = pA.name.toUpperCase();
    if (colHeaderB) colHeaderB.textContent = pB.name.toUpperCase();

    if (labelChoosePlanA) labelChoosePlanA.textContent = `Choose ${pA.name}`;
    if (labelChoosePlanB) labelChoosePlanB.textContent = `Choose ${pB.name}`;

    btnChoosePlanA?.setAttribute('data-plan', pA.id);
    btnChoosePlanB?.setAttribute('data-plan', pB.id);

    // Matrix rows
    const rows = [
      {
        criteria: 'Main Quota',
        valA: `${pA.quotaNum} GB`,
        valB: `${pB.quotaNum} GB`,
        winner: pA.quotaNum > pB.quotaNum ? 'A' : (pB.quotaNum > pA.quotaNum ? 'B' : 'tie')
      },
      {
        criteria: 'Validity',
        valA: pA.validity,
        valB: pB.validity,
        winner: 'tie'
      },
      {
        criteria: 'Price',
        valA: pA.price,
        valB: pB.price,
        winner: pA.priceNum < pB.priceNum ? 'A' : 'B'
      },
      {
        criteria: 'Apps Quota',
        valA: pA.appsQuota,
        valB: pB.appsQuota,
        winner: 'B'
      },
      {
        criteria: 'Calls / Voice',
        valA: pA.voice,
        valB: pB.voice,
        winner: 'B'
      }
    ];

    if (compareTableBody) {
      compareTableBody.innerHTML = rows.map(r => `
        <tr>
          <td class="col-criteria">${r.criteria}</td>
          <td class="col-plan-a ${r.winner === 'A' ? 'winning-cell' : ''}">${r.valA}</td>
          <td class="col-plan-b ${r.winner === 'B' ? 'winning-cell' : ''}">${r.valB}</td>
        </tr>
      `).join('');
    }

    // Dynamic Verdict Banner
    if (verdictTitle && verdictDesc) {
      if (pB.quotaNum >= pA.quotaNum) {
        verdictTitle.textContent = `${pB.name.toUpperCase()} WINS`;
        const diffPrice = Math.abs(pB.priceNum - pA.priceNum).toLocaleString('en-US');
        verdictDesc.textContent = `${pB.name} delivers extra application quota and full voice perks for only Rp ${diffPrice} difference.`;
      } else {
        verdictTitle.textContent = `${pA.name.toUpperCase()} WINS`;
        verdictDesc.textContent = `${pA.name} offers greater savings with solid daily data capacity.`;
      }
    }
  }

  compareSelectA?.addEventListener('change', updateCompareMatrix);
  compareSelectB?.addEventListener('change', updateCompareMatrix);
  updateCompareMatrix();

  // ==========================================
  // SCREEN 7: WEEKLY CHART INTERACTION
  // ==========================================
  const chartCols = document.querySelectorAll('.weekly-bar-chart .bar-col');
  const chartTooltip = document.getElementById('chartTooltip');

  chartCols.forEach(col => {
    col.addEventListener('mouseenter', () => {
      const day = col.getAttribute('data-day');
      const gb = col.getAttribute('data-gb');
      if (chartTooltip) {
        chartTooltip.innerHTML = `<strong>${day}:</strong> Data usage: <strong>${gb}</strong>`;
      }
    });

    col.addEventListener('click', () => {
      const day = col.getAttribute('data-day');
      const gb = col.getAttribute('data-gb');
      chartCols.forEach(c => c.querySelector('.bar-fill').classList.remove('blue-peak-fill'));
      col.querySelector('.bar-fill').classList.add('blue-peak-fill');
      if (chartTooltip) {
        chartTooltip.innerHTML = `<strong>${day}:</strong> Data usage: <strong>${gb}</strong> (Selected)`;
      }
      showToast(`${day}: ${gb}`);
    });
  });

  // ==========================================
  // SCREEN 8: LOAD DETAILS & PURCHASE FLOW
  // ==========================================
  function loadPlanDetails(planId) {
    const plan = PLANS_DB[planId] || PLANS_DB.combo50;
    selectedPlanForDetails = plan;

    const elName = document.getElementById('detailsPlanName');
    const elPrice = document.getElementById('detailsPriceTag');
    const elQuota = document.getElementById('detailsQuotaVal');
    const elSpecMain = document.getElementById('detailsSpecMain');
    const elSpecApps = document.getElementById('detailsSpecApps');
    const elSpecRate = document.getElementById('detailsSpecRate');
    const elSpecVoice = document.getElementById('detailsSpecVoice');
    const elScore = document.getElementById('detailsScore');
    const elRecommend = document.getElementById('detailsRecommendStatement');
    const elBenefits = document.getElementById('detailsBenefitsList');
    const elBtnOrderLabel = document.getElementById('btnOrderPlanLabel');

    if (elName) elName.textContent = plan.name;
    if (elPrice) elPrice.textContent = plan.price;
    if (elQuota) elQuota.textContent = plan.quota;
    if (elSpecMain) elSpecMain.textContent = plan.mainQuota;
    if (elSpecApps) elSpecApps.textContent = plan.appsQuota;
    if (elSpecRate) elSpecRate.textContent = `${plan.ratePerGb} (Value)`;
    if (elSpecVoice) elSpecVoice.textContent = plan.voice;
    if (elScore) elScore.textContent = plan.score;
    if (elRecommend) elRecommend.textContent = plan.recommendRate;
    if (elBtnOrderLabel) elBtnOrderLabel.textContent = `Choose plan • ${plan.price}`;

    if (elBenefits && plan.benefits) {
      elBenefits.innerHTML = plan.benefits.map(b => `
        <li class="benefit-li">
          <div class="benefit-check-icon">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="benefit-txt">${b}</span>
        </li>
      `).join('');
    }
  }

  // Open Checkout Sheet
  const btnOrderPlan = document.getElementById('btnOrderPlan');
  btnOrderPlan?.addEventListener('click', () => {
    const elTitle = document.getElementById('checkoutPlanTitle');
    const elPrice = document.getElementById('checkoutPlanPrice');
    if (elTitle) elTitle.textContent = `${selectedPlanForDetails.name} - ${selectedPlanForDetails.quota}`;
    if (elPrice) elPrice.textContent = selectedPlanForDetails.price;

    checkoutBackdrop?.classList.add('open');
  });

  // Close Checkout Sheet
  btnCloseSheet?.addEventListener('click', () => {
    checkoutBackdrop?.classList.remove('open');
  });

  checkoutBackdrop?.addEventListener('click', (e) => {
    if (e.target === checkoutBackdrop) {
      checkoutBackdrop.classList.remove('open');
    }
  });

  // Confirm Payment
  btnConfirmPay?.addEventListener('click', () => {
    checkoutBackdrop?.classList.remove('open');

    // Update Home Screen hero quota with new plan
    const homeQuotaRemaining = document.getElementById('homeQuotaRemaining');
    const homeQuotaUsedLabel = document.getElementById('homeQuotaUsedLabel');
    const homeProgressBar = document.getElementById('homeProgressBar');
    const successDesc = document.getElementById('successDesc');

    if (homeQuotaRemaining) {
      homeQuotaRemaining.textContent = selectedPlanForDetails.quota;
    }
    if (homeQuotaUsedLabel) {
      homeQuotaUsedLabel.textContent = '0 GB used';
    }
    if (homeProgressBar) {
      homeProgressBar.style.width = '100%';
    }
    if (successDesc) {
      successDesc.textContent = `${selectedPlanForDetails.name} (${selectedPlanForDetails.quota}) has been activated on your mobile account.`;
    }

    // Open Success Overlay
    successOverlay?.classList.add('open');
    showToast(`Subscription to ${selectedPlanForDetails.name} Successful!`);
  });

  btnBackToHome?.addEventListener('click', () => {
    successOverlay?.classList.remove('open');
    navigateTo('screen-home');
  });

  // Initial load
  loadPlanDetails('combo50');
});
