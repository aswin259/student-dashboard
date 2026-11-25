/**
 * Student Dashboard - Vanilla JavaScript Controller
 * Beginner-friendly code managing sample student data, navigation,
 * attendance progress bars, assignments, marks, timetable, and profile updates.
 */

/* =========================================================
   1. Sample Student Data
   ========================================================= */

const studentProfile = {
  name: 'Ananya Krishnan',
  registerNumber: 'CS2023048',
  department: 'Computer Science & Engineering',
  year: '3rd Year',
  semester: 'Semester 5',
  email: 'ananya.krishnan@northbridge.edu',
  phone: '+91 98402 61734',
  advisor: 'Dr. Rajeshwari Menon',
};

const subjectsAttendance = [
  { code: 'CS501', name: 'Data Structures & Algorithms', attended: 34, total: 36 },
  { code: 'CS502', name: 'Database Management Systems', attended: 31, total: 35 },
  { code: 'CS503', name: 'Operating Systems', attended: 29, total: 32 },
  { code: 'CS504', name: 'Computer Networks', attended: 26, total: 32 },
  { code: 'CS505', name: 'Software Engineering', attended: 28, total: 30 },
  { code: 'CS506', name: 'Web Technologies', attended: 18, total: 25 },
];

let assignmentsData = [
  {
    id: 1,
    title: 'Balanced Binary Search Tree Implementation',
    subject: 'Data Structures & Algorithms',
    dueDate: '2026-11-28',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'ER Diagram & SQL Normalization Case Study',
    subject: 'Database Management Systems',
    dueDate: '2026-11-30',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'CPU Scheduling Simulator Report',
    subject: 'Operating Systems',
    dueDate: '2026-12-03',
    status: 'Pending',
  },
  {
    id: 4,
    title: 'TCP/UDP Socket Programming Lab',
    subject: 'Computer Networks',
    dueDate: '2026-11-22',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Agile Sprint Planning Specification',
    subject: 'Software Engineering',
    dueDate: '2026-11-19',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Responsive Campus Portal Layout',
    subject: 'Web Technologies',
    dueDate: '2026-11-16',
    status: 'Completed',
  },
  {
    id: 7,
    title: 'Dynamic Programming Problem Set',
    subject: 'Data Structures & Algorithms',
    dueDate: '2026-11-12',
    status: 'Completed',
  },
];

const marksData = [
  { code: 'CS501', subject: 'Data Structures & Algorithms', test1: 24, test2: 23, internal: 47 },
  { code: 'CS502', subject: 'Database Management Systems', test1: 22, test2: 21, internal: 45 },
  { code: 'CS503', subject: 'Operating Systems', test1: 21, test2: 22, internal: 43 },
  { code: 'CS504', subject: 'Computer Networks', test1: 20, test2: 21, internal: 42 },
  { code: 'CS505', subject: 'Software Engineering', test1: 23, test2: 22, internal: 46 },
  { code: 'CS506', subject: 'Web Technologies', test1: 22, test2: 20, internal: 42 },
];

const timetableData = [
  {
    day: 'Monday',
    classes: [
      { time: '09:00 - 10:00', subject: 'Data Structures & Algorithms', code: 'CS501', room: 'Room 302' },
      { time: '10:15 - 11:15', subject: 'Database Management Systems', code: 'CS502', room: 'Room 304' },
      { time: '11:30 - 12:30', subject: 'Operating Systems', code: 'CS503', room: 'Room 302' },
      { time: '14:00 - 16:00', subject: 'DBMS Practical Lab', code: 'CS502L', room: 'Lab Block B-2' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '09:00 - 10:00', subject: 'Computer Networks', code: 'CS504', room: 'Room 305' },
      { time: '10:15 - 11:15', subject: 'Software Engineering', code: 'CS505', room: 'Room 302' },
      { time: '11:30 - 12:30', subject: 'Web Technologies', code: 'CS506', room: 'Room 308' },
      { time: '14:00 - 15:00', subject: 'Data Structures Tutorial', code: 'CS501', room: 'Room 302' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '09:00 - 10:00', subject: 'Operating Systems', code: 'CS503', room: 'Room 302' },
      { time: '10:15 - 11:15', subject: 'Data Structures & Algorithms', code: 'CS501', room: 'Room 302' },
      { time: '11:30 - 12:30', subject: 'Computer Networks', code: 'CS504', room: 'Room 305' },
      { time: '14:00 - 16:00', subject: 'Web Technologies Lab', code: 'CS506L', room: 'Lab Block A-1' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '09:00 - 10:00', subject: 'Database Management Systems', code: 'CS502', room: 'Room 304' },
      { time: '10:15 - 11:15', subject: 'Software Engineering', code: 'CS505', room: 'Room 302' },
      { time: '11:30 - 12:30', subject: 'Web Technologies', code: 'CS506', room: 'Room 308' },
      { time: '14:00 - 16:00', subject: 'Operating Systems Lab', code: 'CS503L', room: 'Lab Block B-1' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '09:00 - 10:00', subject: 'Data Structures & Algorithms', code: 'CS501', room: 'Room 302' },
      { time: '10:15 - 11:15', subject: 'Computer Networks', code: 'CS504', room: 'Room 305' },
      { time: '11:30 - 12:30', subject: 'Database Management Systems', code: 'CS502', room: 'Room 304' },
      { time: '14:00 - 15:00', subject: 'Software Engineering Seminar', code: 'CS505', room: 'Seminar Hall 2' },
    ],
  },
];

/* =========================================================
   2. UI State
   ========================================================= */

const state = {
  activeSection: 'dashboard',
  attendanceFilter: 'all',
  assignmentFilter: 'all',
  marksSort: 'default',
  timetableDay: 'All',
};

const sectionTitles = {
  dashboard: 'Dashboard',
  profile: 'My Profile',
  attendance: 'Attendance',
  assignments: 'Assignments',
  marks: 'Marks',
  timetable: 'Timetable',
};

/* =========================================================
   3. Helper Functions
   ========================================================= */

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = String(text);
  return div.innerHTML;
}

function formatDisplayDate(isoDate) {
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return isoDate;
  }
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getTodayWeekdayName() {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = weekdays[new Date().getDay()];
  // Fall back to Wednesday on weekends so Today's Classes stays useful
  return dayName === 'Saturday' || dayName === 'Sunday' ? 'Wednesday' : dayName;
}

function getGradeForScore(score) {
  if (score >= 90) return 'A+';
  if (score >= 80) return 'A';
  if (score >= 70) return 'B+';
  if (score >= 60) return 'B';
  return 'C';
}

function computeAttendanceSummary() {
  let attended = 0;
  let total = 0;
  for (const item of subjectsAttendance) {
    attended += item.attended;
    total += item.total;
  }
  const percentage = total > 0 ? (attended / total) * 100 : 0;
  return { attended, total, percentage };
}

function computeMarksSummary() {
  let totalObtained = 0;
  const maxTotal = marksData.length * 100;
  for (const item of marksData) {
    totalObtained += item.test1 + item.test2 + item.internal;
  }
  const average = maxTotal > 0 ? (totalObtained / maxTotal) * 100 : 0;
  return { totalObtained, maxTotal, average };
}

/* =========================================================
   4. Navigation & Responsive Sidebar
   ========================================================= */

function openMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar && backdrop) {
    sidebar.classList.add('open');
    backdrop.hidden = false;
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar && backdrop) {
    sidebar.classList.remove('open');
    backdrop.hidden = true;
  }
}

function navigateTo(sectionKey) {
  if (!sectionTitles[sectionKey]) return;
  state.activeSection = sectionKey;

  // Toggle visible section
  document.querySelectorAll('.page-section').forEach((section) => {
    const isTarget = section.id === `section-${sectionKey}`;
    section.hidden = !isTarget;
    section.classList.toggle('active', isTarget);
  });

  // Update sidebar active state
  document.querySelectorAll('.nav-item[data-section]').forEach((btn) => {
    const isActive = btn.getAttribute('data-section') === sectionKey;
    btn.classList.toggle('active', isActive);
    if (isActive) {
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.removeAttribute('aria-current');
    }
  });

  // Update topbar breadcrumb title
  const titleEl = document.getElementById('topbar-section-title');
  if (titleEl) {
    titleEl.textContent = sectionTitles[sectionKey];
  }

  closeMobileSidebar();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

/* =========================================================
   5. Render Functions
   ========================================================= */

function renderProfile() {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText('topbar-student-name', studentProfile.name);
  setText('welcome-heading', `Welcome back, ${studentProfile.name}`);
  setText('home-reg-no', studentProfile.registerNumber);
  setText('home-advisor', studentProfile.advisor);
  setText('home-email', studentProfile.email);

  setText('profile-display-name', studentProfile.name);
  setText('profile-display-dept', studentProfile.department);
  setText('profile-display-reg', studentProfile.registerNumber);
  setText('profile-name', studentProfile.name);
  setText('profile-reg', studentProfile.registerNumber);
  setText('profile-department', studentProfile.department);
  setText('profile-year', studentProfile.year);
  setText('profile-semester', studentProfile.semester);
  setText('profile-email', studentProfile.email);
  setText('profile-phone', studentProfile.phone);
  setText('profile-advisor', studentProfile.advisor);
  setText('signed-out-student-name', studentProfile.name);
}

function renderDashboardHome() {
  // 1. Update 4 KPI summary cards
  const attendance = computeAttendanceSummary();
  const marks = computeMarksSummary();
  const pendingCount = assignmentsData.filter((a) => a.status === 'Pending').length;
  const completedCount = assignmentsData.length - pendingCount;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText('stat-total-subjects', String(subjectsAttendance.length));
  setText('stat-attendance', `${attendance.percentage.toFixed(1)}%`);
  setText('stat-attendance-sub', `${attendance.attended} / ${attendance.total} classes attended`);
  setText('stat-pending-assignments', String(pendingCount));
  setText('stat-assignments-sub', `${completedCount} of ${assignmentsData.length} completed`);
  setText('stat-overall-marks', `${marks.average.toFixed(1)}%`);
  setText('stat-marks-sub', `${marks.totalObtained} / ${marks.maxTotal} internal total`);
  setText('sidebar-pending-count', String(pendingCount));

  // 2. Render Upcoming Pending Assignments on Dashboard Home
  const homeAssignList = document.getElementById('home-assignments-list');
  if (homeAssignList) {
    const pendingItems = assignmentsData.filter((a) => a.status === 'Pending').slice(0, 4);

    if (pendingItems.length === 0) {
      homeAssignList.innerHTML = `
        <div class="empty-state">
          <p>All assignments are completed. Great job staying ahead.</p>
        </div>
      `;
    } else {
      homeAssignList.innerHTML = pendingItems
        .map(
          (item) => `
          <div class="clean-list-row">
            <div class="row-main">
              <p class="row-title">${escapeHtml(item.title)}</p>
              <p class="row-meta">
                <span>${escapeHtml(item.subject)}</span>
                <span aria-hidden="true">&middot;</span>
                <span class="mono-num">Due ${escapeHtml(formatDisplayDate(item.dueDate))}</span>
              </p>
            </div>
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-toggle-assignment="${item.id}"
            >
              Mark Done
            </button>
          </div>
        `
        )
        .join('');
    }
  }

  // 3. Render Today's Classes on Dashboard Home
  const todayName = getTodayWeekdayName();
  const todaySchedule = timetableData.find((d) => d.day === todayName) || timetableData[0];
  setText('home-today-label', `${todaySchedule.day} schedule`);

  const homeScheduleList = document.getElementById('home-schedule-list');
  if (homeScheduleList) {
    homeScheduleList.innerHTML = todaySchedule.classes
      .map(
        (slot) => `
        <div class="clean-list-row">
          <div class="row-main">
            <p class="row-title">${escapeHtml(slot.subject)}</p>
            <p class="row-meta">
              <span class="mono-text">${escapeHtml(slot.code)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>${escapeHtml(slot.room)}</span>
            </p>
          </div>
          <span class="slot-time">${escapeHtml(slot.time)}</span>
        </div>
      `
      )
      .join('');
  }
}

function renderAttendance() {
  const summary = computeAttendanceSummary();
  const overallEl = document.getElementById('attendance-overall-pct');
  const classesEl = document.getElementById('attendance-total-classes');
  const eligibilityEl = document.getElementById('attendance-eligibility');
  const countNoteEl = document.getElementById('attendance-count-note');
  const listEl = document.getElementById('attendance-list');

  if (overallEl) overallEl.textContent = `${summary.percentage.toFixed(1)}%`;
  if (classesEl) classesEl.textContent = `${summary.attended} / ${summary.total}`;
  if (eligibilityEl) {
    const isEligible = summary.percentage >= 75;
    eligibilityEl.textContent = isEligible ? 'Eligible for Exams' : 'Below 75% Threshold';
    eligibilityEl.className = `summary-big ${isEligible ? 'status-good' : 'status-low'}`;
  }

  const filtered = subjectsAttendance.filter((sub) => {
    const pct = (sub.attended / sub.total) * 100;
    if (state.attendanceFilter === 'good') return pct >= 80;
    if (state.attendanceFilter === 'low') return pct < 80;
    return true;
  });

  if (countNoteEl) {
    countNoteEl.textContent = `Showing ${filtered.length} of ${subjectsAttendance.length} subjects`;
  }

  if (!listEl) return;

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <p>No subjects match this attendance filter.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered
    .map((sub) => {
      const pct = (sub.attended / sub.total) * 100;
      const pctFormatted = pct.toFixed(1);
      let fillClass = 'fill-good';
      let statusClass = 'status-good';
      let statusLabel = 'Good Standing';

      if (pct < 75) {
        fillClass = 'fill-low';
        statusClass = 'status-low';
        statusLabel = 'Below 75%';
      } else if (pct < 82) {
        fillClass = 'fill-warn';
        statusClass = 'status-warn';
        statusLabel = 'Monitor';
      }

      return `
        <div class="attendance-row">
          <div class="attendance-row-top">
            <div class="attendance-subject">
              <span class="mono-text meta-text">${escapeHtml(sub.code)}</span>
              <span class="attendance-subject-name">${escapeHtml(sub.name)}</span>
            </div>
            <div class="attendance-right">
              <span class="meta-text mono-num">${sub.attended} / ${sub.total} classes</span>
              <span aria-hidden="true" class="meta-text">&middot;</span>
              <span class="${statusClass}">${statusLabel}</span>
              <span class="attendance-pct mono-num">${pctFormatted}%</span>
            </div>
          </div>
          <div
            class="progress-track"
            role="progressbar"
            aria-label="${escapeHtml(sub.name)} attendance"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="${Math.round(pct)}"
          >
            <div class="progress-fill ${fillClass}" style="width: ${pctFormatted}%;"></div>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderAssignments() {
  const tbody = document.getElementById('assignments-tbody');
  const emptyEl = document.getElementById('assignments-empty');
  if (!tbody || !emptyEl) return;

  const filtered = assignmentsData.filter((item) => {
    if (state.assignmentFilter === 'all') return true;
    return item.status === state.assignmentFilter;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  tbody.innerHTML = filtered
    .map((item) => {
      const isCompleted = item.status === 'Completed';
      const statusClass = isCompleted ? 'status-good' : 'status-warn';
      const btnLabel = isCompleted ? 'Mark Pending' : 'Mark Completed';

      return `
        <tr>
          <td class="cell-primary">${escapeHtml(item.title)}</td>
          <td>${escapeHtml(item.subject)}</td>
          <td class="mono-num">${escapeHtml(formatDisplayDate(item.dueDate))}</td>
          <td><span class="${statusClass}">${escapeHtml(item.status)}</span></td>
          <td class="col-right">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-toggle-assignment="${item.id}"
            >
              ${btnLabel}
            </button>
          </td>
        </tr>
      `;
    })
    .join('');
}

function renderMarks() {
  const tbody = document.getElementById('marks-tbody');
  const tfoot = document.getElementById('marks-tfoot');
  const summary = computeMarksSummary();

  const totalEl = document.getElementById('marks-total-display');
  const avgEl = document.getElementById('marks-avg-display');
  const standingEl = document.getElementById('marks-standing-display');

  if (totalEl) totalEl.textContent = `${summary.totalObtained} / ${summary.maxTotal}`;
  if (avgEl) avgEl.textContent = `${summary.average.toFixed(1)}%`;
  if (standingEl) {
    standingEl.textContent =
      summary.average >= 85 ? 'First Class with Distinction' : summary.average >= 70 ? 'First Class' : 'Pass';
  }

  const rows = marksData.map((item) => {
    const total = item.test1 + item.test2 + item.internal;
    return { ...item, total, grade: getGradeForScore(total) };
  });

  if (state.marksSort === 'high') {
    rows.sort((a, b) => b.total - a.total);
  } else if (state.marksSort === 'low') {
    rows.sort((a, b) => a.total - b.total);
  }

  if (tbody) {
    tbody.innerHTML = rows
      .map(
        (row) => `
        <tr>
          <td class="mono-text">${escapeHtml(row.code)}</td>
          <td class="cell-primary">${escapeHtml(row.subject)}</td>
          <td class="col-right mono-num">${row.test1}</td>
          <td class="col-right mono-num">${row.test2}</td>
          <td class="col-right mono-num">${row.internal}</td>
          <td class="col-right cell-primary mono-num">${row.total}</td>
          <td class="col-right status-good">${row.grade}</td>
        </tr>
      `
      )
      .join('');
  }

  if (tfoot) {
    tfoot.innerHTML = `
      <tr>
        <td colspan="5">Total Marks &amp; Overall Average</td>
        <td class="col-right mono-num">${summary.totalObtained} / ${summary.maxTotal}</td>
        <td class="col-right mono-num">${summary.average.toFixed(1)}%</td>
      </tr>
    `;
  }
}

function renderTimetable() {
  const container = document.getElementById('timetable-container');
  if (!container) return;

  const todayName = getTodayWeekdayName();
  const visibleDays =
    state.timetableDay === 'All'
      ? timetableData
      : timetableData.filter((d) => d.day === state.timetableDay);

  container.innerHTML = visibleDays
    .map((dayObj) => {
      const isToday = dayObj.day === todayName;
      const slotsHtml = dayObj.classes
        .map(
          (slot) => `
          <div class="slot-row">
            <div class="slot-details">
              <p class="slot-subject">${escapeHtml(slot.subject)}</p>
              <p class="slot-meta">
                <span class="mono-text">${escapeHtml(slot.code)}</span>
                <span aria-hidden="true">&middot;</span>
                <span>${escapeHtml(slot.room)}</span>
              </p>
            </div>
            <span class="slot-time">${escapeHtml(slot.time)}</span>
          </div>
        `
        )
        .join('');

      return `
        <article class="day-card ${isToday ? 'is-today' : ''}">
          <div class="day-card-header">
            <h2 class="day-name">${escapeHtml(dayObj.day)}</h2>
            ${isToday ? '<span class="today-label">Today</span>' : `<span class="meta-text">${dayObj.classes.length} classes</span>`}
          </div>
          ${slotsHtml}
        </article>
      `;
    })
    .join('');
}

function renderAll() {
  renderProfile();
  renderDashboardHome();
  renderAttendance();
  renderAssignments();
  renderMarks();
  renderTimetable();
}

/* =========================================================
   6. Event Listeners & Interactions
   ========================================================= */

function setupImageFallbacks() {
  document.querySelectorAll('.avatar-frame img').forEach((img) => {
    img.addEventListener('error', () => {
      img.parentElement?.classList.add('img-failed');
    });
  });
}

function setupEventListeners() {
  // Sidebar navigation clicks
  document.querySelectorAll('.nav-item[data-section]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-section');
      if (target) navigateTo(target);
    });
  });

  // Quick-jump buttons & dashboard KPI cards
  document.querySelectorAll('[data-goto]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-goto');
      if (target) navigateTo(target);
    });
  });

  // Topbar user button opens My Profile
  document.getElementById('topbar-profile-btn')?.addEventListener('click', () => {
    navigateTo('profile');
  });

  // Mobile sidebar drawer controls
  document.getElementById('open-sidebar-btn')?.addEventListener('click', openMobileSidebar);
  document.getElementById('close-sidebar-btn')?.addEventListener('click', closeMobileSidebar);
  document.getElementById('sidebar-backdrop')?.addEventListener('click', closeMobileSidebar);

  // Attendance filter buttons
  document.querySelectorAll('[data-attendance-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-attendance-filter') || 'all';
      state.attendanceFilter = filter;
      document.querySelectorAll('[data-attendance-filter]').forEach((b) => {
        b.classList.toggle('active', b === btn);
      });
      renderAttendance();
    });
  });

  // Assignment filter buttons
  document.querySelectorAll('[data-assignment-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-assignment-filter') || 'all';
      state.assignmentFilter = filter;
      document.querySelectorAll('[data-assignment-filter]').forEach((b) => {
        b.classList.toggle('active', b === btn);
      });
      renderAssignments();
    });
  });

  // Reset assignment filter from empty state
  document.getElementById('reset-assignment-filter-btn')?.addEventListener('click', () => {
    state.assignmentFilter = 'all';
    document.querySelectorAll('[data-assignment-filter]').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-assignment-filter') === 'all');
    });
    renderAssignments();
  });

  // Toggle assignment status (works from both Dashboard Home and Assignments table)
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const toggleBtn = target.closest('[data-toggle-assignment]');
    if (!toggleBtn) return;

    const id = Number(toggleBtn.getAttribute('data-toggle-assignment'));
    const assignment = assignmentsData.find((a) => a.id === id);
    if (!assignment) return;

    assignment.status = assignment.status === 'Pending' ? 'Completed' : 'Pending';
    renderDashboardHome();
    renderAssignments();
  });

  // Add Assignment form toggle & submit
  const addAssignPanel = document.getElementById('add-assignment-panel');
  const addAssignForm = document.getElementById('add-assignment-form');

  document.getElementById('toggle-add-assignment-btn')?.addEventListener('click', () => {
    if (!addAssignPanel) return;
    addAssignPanel.hidden = !addAssignPanel.hidden;
    if (!addAssignPanel.hidden) {
      const dateInput = document.getElementById('new-assignment-date');
      if (dateInput instanceof HTMLInputElement && !dateInput.value) {
        dateInput.value = '2026-12-05';
      }
      document.getElementById('new-assignment-title')?.focus();
    }
  });

  document.getElementById('cancel-add-assignment-btn')?.addEventListener('click', () => {
    if (addAssignPanel) addAssignPanel.hidden = true;
  });

  addAssignForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('new-assignment-title');
    const subjectInput = document.getElementById('new-assignment-subject');
    const dateInput = document.getElementById('new-assignment-date');

    if (
      !(titleInput instanceof HTMLInputElement) ||
      !(subjectInput instanceof HTMLSelectElement) ||
      !(dateInput instanceof HTMLInputElement)
    ) {
      return;
    }

    const title = titleInput.value.trim();
    if (!title) return;

    assignmentsData = [
      {
        id: Date.now(),
        title,
        subject: subjectInput.value,
        dueDate: dateInput.value,
        status: 'Pending',
      },
      ...assignmentsData,
    ];

    titleInput.value = '';
    if (addAssignPanel) addAssignPanel.hidden = true;
    renderDashboardHome();
    renderAssignments();
  });

  // Marks sort controls
  document.querySelectorAll('[data-marks-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.marksSort = btn.getAttribute('data-marks-sort') || 'default';
      document.querySelectorAll('[data-marks-sort]').forEach((b) => {
        b.classList.toggle('active', b === btn);
      });
      renderMarks();
    });
  });

  // Timetable day tabs
  document.querySelectorAll('[data-day-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.timetableDay = btn.getAttribute('data-day-filter') || 'All';
      document.querySelectorAll('[data-day-filter]').forEach((b) => {
        b.classList.toggle('active', b === btn);
      });
      renderTimetable();
    });
  });

  // Profile inline contact editor
  const editProfileForm = document.getElementById('profile-edit-form');
  const editEmailInput = document.getElementById('edit-email-input');
  const editPhoneInput = document.getElementById('edit-phone-input');
  const profileFeedback = document.getElementById('profile-feedback');

  document.getElementById('toggle-edit-profile-btn')?.addEventListener('click', () => {
    if (!editProfileForm) return;
    const willShow = editProfileForm.hidden;
    editProfileForm.hidden = !willShow;
    if (profileFeedback) profileFeedback.hidden = true;

    if (willShow) {
      if (editEmailInput instanceof HTMLInputElement) editEmailInput.value = studentProfile.email;
      if (editPhoneInput instanceof HTMLInputElement) editPhoneInput.value = studentProfile.phone;
      editEmailInput?.focus();
    }
  });

  document.getElementById('cancel-edit-profile-btn')?.addEventListener('click', () => {
    if (editProfileForm) editProfileForm.hidden = true;
  });

  editProfileForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!(editEmailInput instanceof HTMLInputElement) || !(editPhoneInput instanceof HTMLInputElement)) {
      return;
    }

    studentProfile.email = editEmailInput.value.trim() || studentProfile.email;
    studentProfile.phone = editPhoneInput.value.trim() || studentProfile.phone;
    editProfileForm.hidden = true;
    renderProfile();

    if (profileFeedback) {
      profileFeedback.textContent = 'Contact details updated.';
      profileFeedback.hidden = false;
    }
  });

  // Logout confirmation modal & signed-out state
  const logoutModal = document.getElementById('logout-modal');
  const appShell = document.getElementById('app-shell');
  const signedOutScreen = document.getElementById('signed-out-screen');

  document.getElementById('logout-nav-btn')?.addEventListener('click', () => {
    closeMobileSidebar();
    if (logoutModal) logoutModal.hidden = false;
  });

  document.getElementById('cancel-logout-btn')?.addEventListener('click', () => {
    if (logoutModal) logoutModal.hidden = true;
  });

  logoutModal?.addEventListener('click', (event) => {
    if (event.target === logoutModal) {
      logoutModal.hidden = true;
    }
  });

  document.getElementById('confirm-logout-btn')?.addEventListener('click', () => {
    if (logoutModal) logoutModal.hidden = true;
    if (appShell) appShell.hidden = true;
    if (signedOutScreen) signedOutScreen.hidden = false;
  });

  document.getElementById('sign-back-in-btn')?.addEventListener('click', () => {
    if (signedOutScreen) signedOutScreen.hidden = true;
    if (appShell) appShell.hidden = false;
    navigateTo('dashboard');
  });

  // Close modal or mobile drawer with Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (logoutModal && !logoutModal.hidden) {
        logoutModal.hidden = true;
      }
      closeMobileSidebar();
    }
  });
}

/* =========================================================
   7. Initialize Application
   ========================================================= */

function initApp() {
  setupImageFallbacks();
  setupEventListeners();
  renderAll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
