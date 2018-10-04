function L7Xl(t, a, e) { 
		"use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }); var n = e("7t+N"),
            o = e.n(n),
            r = e("Lokx"),
            i = e.n(r),
            s = e("PJh5"),
            d = e.n(s);! function() {
            function t(t) { var a = o()(t.delegateTarget),
                    e = t.target.options[t.target.selectedIndex];
                a.find(".form-select__toggle > span").text(e.textContent) } o()('[data-behavior="select"]').on("change", "select", t) }(),
        function() { var t = function() { return function() { return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent)) }() ? function() { var t = o()(this),
                        a = { width: t.data("width") || "auto", allow_single_deselect: t.data("deselect") || !1 };
                    t.on("chosen:ready", function(a, e) { e.chosen.container.addClass(t.data("theme") || "default") }).chosen(a) } : function() { var t = o()(this),
                        a = t.data("placeholder");
                    a.length && !t.val().length && t.after('<span class="pseudoholder">' + a + "</span>"), t.on("change", function(a) { t.toggleClass("selected", a.target.value.length > 0) }) } }();
            o()('[data-behavior="chosen"]').each(t) }(),
        function() { o()('[data-behavior="confirm"]').on("click", function(t) { var a = o()(this),
                    e = a.data("message") || "Are you sure?"; if (!window.confirm(e)) return t.preventDefault(), !1 }) }(),
        function() { o()('[data-behavior="toolbar_report"]').each(function() {
                function t() { a.submit() } var a = o()(this),
                    e = a.find('[type="daterange"]'),
                    n = a.find('[name="grouping"]'),
                    r = a.find('[name="subgrouping"]'),
                    i = n.val();
                e.daterangepicker({ locale: { format: "DD MMM YYYY", firstDay: 1 }, autoApply: !0, startDate: e.data("startDate"), endDate: e.data("endDate"), showCustomRangeLabel: !1, ranges: { Today: [d()(), d()()], "This week": [d()().startOf("isoWeek"), d()().endOf("isoWeek")], "This month": [d()().startOf("month"), d()().endOf("month")], "This year": [d()().startOf("year"), d()().endOf("year")], Yesterday: [d()().subtract(1, "days"), d()().subtract(1, "days")], "Last week": [d()().subtract(1, "week").startOf("isoWeek"), d()().subtract(1, "week").endOf("isoWeek")], "Last month": [d()().subtract(1, "month").startOf("month"), d()().subtract(1, "month").endOf("month")], "Last year": [d()().subtract(1, "year").startOf("year"), d()().subtract(1, "year").endOf("year")] } }, function(e, n) { a.find('[name="start"]').val(e.format("YYYY-MM-DD")), a.find('[name="end"]').val(n.format("YYYY-MM-DD")), t() }).one("show.daterangepicker", function(t, a) { a.container.addClass("rangy") }), n.on("change", function() { r.prop("disabled", !(n.val() === i)), t() }), a.find('[name="subgrouping"]').on("change", t) }) }(),
        function() {
            function t(t) { if (o()(t.target).find(".btn-secondary").length) return t.preventDefault }

            function a(t) { var a = o()(t.target),
                    e = o()(a.data("target"));
                s.find(".toolbar-dashboard__group").addClass("hidden"), e.removeClass("hidden") }

            function e(t) { var a = o()("app_timer_task" === t.target.id ? "#app_ticker_task" : "#app_timer_task");
                n(o()(t.target)), a.val(t.target.value), a.trigger("chosen:updated"), n(a) }

            function n(t) { var a = t.closest(".toolbar-dashboard__group"),
                    e = "" === t.val();
                s.toggleClass("selected", !e), a.find(".toolbar-dashboard__btn").removeClass(e ? "btn-primary" : "btn-secondary").addClass(e ? "btn-secondary" : "btn-primary"), !e && r(t) }

            function r(t) { var a = t.data("chosen"); if (a) { var e = t.prop("options"),
                        n = e[t.prop("selectedIndex")],
                        o = n.parentNode,
                        r = o.label + " • <span>" + n.text + "</span>";
                    a.selected_item.find("span").html(r) } }

            function i(t) { var a = o()(t.delegateTarget),
                    e = o()(t.currentTarget);
                a.find(".toolbar-dashboard__group").hide(), a.find(e.data("toggle")).show() } var s = o()('[data-behavior="toolbar_dashboard"]');
            s.on("click", "[data-toggle]", i).on("click", '[data-action="switch"]', a).on("change", '[data-behavior="chosen"]', e).on("submit", "form", t) }(),
        function() { o()('[data-behavior="archive_toggle"]').each(function() { var t = o()(this),
                    a = t.find("span"),
                    e = a.text(),
                    n = t.data("reverse"),
                    r = o()(t.data("target")),
                    i = !0;
                t.on("click", function() { r.toggleClass("visible"), a.text(i ? n : e), i = !i }) }) }(),
        function() { o()('[data-behavior="date_picker"]').each(function() { var t = o()(this),
                    a = !1;
                t.daterangepicker({ locale: { format: "DD MMM YYYY", firstDay: 1 }, autoApply: !0, singleDatePicker: !0 }, function(e) { o()(t.data("target")).val(e.format("YYYY-MM-DD")), a || (t.addClass("active"), a = !0) }) }) }(),
        function() { o()('[data-behavior="datetime_picker"]').each(function() { var t = o()(this);
                t.daterangepicker({ locale: { format: "DD MMM YYYY H:mm", firstDay: 1 }, singleDatePicker: !0, timePicker: !0, timePicker24Hour: !0, buttonClasses: "hidden" }).on("hide.daterangepicker", function(a, e) { o()(t.data("target")).val(e.startDate.format()) }) }) }(),
        function() { o()('[data-behavior="sortable"]').each(function() { var t = o()(this),
                    a = new i.a(this, { handle: ".handle", onEnd: function() { o.a.post(t.data("path"), { sortable: a.toArray() }) } }) }) }(),
        function() {
            function t() { var t = r + Math.floor((Date.now() - i) / 1e3),
                    s = e(t);
                document.title = o(s), n.innerHTML = a(s, t) }

            function a(t, a) { var e = a % 2; return t = a >= 60 ? t.substr(0, t.lastIndexOf(":")) : t.substr(t.indexOf(":") + 1), e ? t : t.replace(":", "<u>:</u>") }

            function e(t) { var a = parseInt(t, 10),
                    e = Math.floor(a / 3600),
                    n = Math.floor((a - 3600 * e) / 60),
                    o = a - 3600 * e - 60 * n; return e < 10 && (e = "0" + e), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), e + ":" + n + ":" + o } var n = document.querySelector('[data-behavior="ticker"]'); if (n) { var o = function(t) { return function(a) { return t.replace("%s", a) } }(n.getAttribute("data-ticker-title")),
                    r = parseInt(n.getAttribute("data-ticker")),
                    i = Date.now();
                setInterval(t, 1e3) } }(),
        function() { o()('[data-behavior="projects_toggle"]').on("change", function(t) { var a = t.target.options[t.target.selectedIndex].value,
                    e = "ROLE_USER" === a;
                o()('[data-behavior="member_projects"]').toggleClass("disabled", e) }) }(),
        function() { o()('[data-behavior="task_estimation_toggle"]').on("change", function(t) { o()('[data-behavior="task_estimation_input"]').prop("readonly", t.target.checked) }) }(),
        function() { o()('[data-behavior="expand_tip"]').on("click", function(t) { o()(this).closest(".form-wrapper__tip").toggleClass("expand") }) }(),
        function() { o()('[data-behavior="send_invitation_toggle"]').on("change", function(t) { var a = o()(this).is(":checked");
                o()('[data-behavior="plain_password"]').prop("disabled", a) }) }(),
        function() { o()('[data-behavior="subscribe_popover"]').one("click", function() { o()(this).closest(this.getAttribute("data-parent")).addClass("popover") }) }() }