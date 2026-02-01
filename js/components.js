export const header = `
    <header class="main-header" style="background: #fff; position: relative;">
        <div style="
            position: absolute;
            inset: 0;
            z-index: 0;
            background: url('./image/Photo1.jpeg') center center/cover no-repeat;
            opacity: 0.13;
            pointer-events: none;
            border-bottom: 1px solid #eee;
        "></div>
        <div class="top-header">
            <div class="container">
                <div class="header-content">
                    <!-- Contact Info -->
                    <div class="contact-info">
                        <a href="tel:0506270030" style="color:inherit;text-decoration:none;">
                            <div class="contact-item">
                                <i class="fas fa-phone-alt icon"></i>
                                <div class="contact-details">
                                    <span class="label">اتصل بنا</span>
                                    <span class="value">0506270030</span>
                                </div>
                            </div>
                        </a>
                        <a href="mailto:info@dayaem.org" style="color:inherit;text-decoration:none;">
                            <div class="contact-item">
                                <i class="fas fa-envelope icon"></i>
                                <div class="contact-details">
                                    <span class="label">البريد الإلكتروني</span>
                                    <span class="value">info@dayaem.org</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <!-- User Actions -->
                    <div class="user-actions">
                        <a class="action-btn login-btn" href="#" id="open-login-modal">
                            <i class="fas fa-sign-in-alt"></i>
                            <span>تسجيل الدخول</span>
                        </a>
                        <a class="action-btn register-btn" href="#" id="open-signup-modal">
                            <i class="fas fa-user-plus"></i>
                            <span>إنشاء حساب</span>
                        </a>
                        <button class="action-btn cart-btn">
                            <i class="fas fa-shopping-cart"></i>
                            <span>عربة التبرعات</span>
                            <span class="cart-badge">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="main-nav">
            <div class="container">
                <div class="nav-wrapper">
                    <!-- Logo Section -->
                    <div class="logo-section">
                        <img src="./image/Logo-1.png" class="logo" alt="جمعية دعائم للعناية بالمساجد بقوز الجعافرة"/>
                    </div>

                    <!-- Menu Items -->
                    <ul class="nav-menu">
                        <li><a href="index.html" class="active"><i class="fas fa-home"></i> الرئيسية</a></li>
                        <li class="dropdown">
                            <a href="who-we-are.html" class="dropdown-toggle">
                                <i class="fas fa-info-circle"></i> عن الجمعية
                                <i class="fas fa-chevron-down arrow"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="who-we-are.html"><i class="fas fa-users"></i> من نحن</a></li>
                                <li><a href="organizational-structure.html"><i class="fas fa-sitemap"></i> الهيكل
                                        التنظيمي</a></li>
                                <li><a href="founders.html"><i class="fas fa-user-tie"></i> المؤسسون</a></li>
                                <li><a href="general-assembly.html"><i class="fas fa-users-cog"></i> الجمعية
                                        العمومية</a></li>
                                <li><a href="board-of-directors.html"><i class="fas fa-briefcase"></i> مجلس الإدارة</a>
                                </li>
                                <li><a href="executive-management.html"><i class="fas fa-user-shield"></i> الإدارة
                                        التنفيذية</a></li>
                                <li><a href="license-certificate.html"><i class="fas fa-certificate"></i> شهادة
                                        الترخيص</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="index.html#governance" class="dropdown-toggle">
                                ☰ الحوكمة
                                <i class="fas fa-chevron-down arrow"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="governance-guides.html"><i class="fas fa-book"></i> أدلة الحوكمة</a></li>
                                <li><a href="regulations-policies.html"><i class="fas fa-file-contract"></i> لوائح
                                        وسياسات الجمعية</a></li>
                                <li><a href="annual-reports.html"><i class="fas fa-chart-bar"></i> التقارير السنوية</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="index.html#donations"><i class="fas fa-donate"></i> جمع التبرعات</a></li>
                        <li class="dropdown">
                            <a href="index.html#jobs" class="dropdown-toggle">
                                <i class="fas fa-briefcase"></i> الوظائف
                                <i class="fas fa-chevron-down arrow"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="index.html#jobs"><i class="fas fa-user-tie"></i> الوظائف المتاحة</a></li>
                                <li><a href="#volunteer"><i class="fas fa-hands-helping"></i> تطوع معنا</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#media" class="dropdown-toggle">
                                <i class="fas fa-photo-video"></i> المركز الإعلامي
                                <i class="fas fa-chevron-down arrow"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="index.html#news"><i class="fas fa-newspaper"></i> الأخبار</a></li>
                                <li><a href="index.html#photo-gallery"><i class="fas fa-images"></i> مكتبة الصور</a></li>
                                <li><a href="index.html#video-gallery"><i class="fas fa-video"></i> مكتبة الفيديو</a></li>
                                <li><a href="index.html#partners"><i class="fas fa-handshake"></i> شركاء النجاح</a></li>
                            </ul>
                        </li>
                        <li><a href="#footer-contact"><i class="fas fa-phone-alt"></i> تواصل معنا</a></li>
                    </ul>

                    <div class="mobile-menu-toggle">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </nav>
    </header>
`;

export const footer = `
    <footer class="main-footer" id="footer-contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>عن الجمعية</h3>
                    <p>جمعية دعائم للعناية بالمساجد بقوز الجعافرة تسعى لخدمة بيوت الله وتعزيز دورها في المجتمع</p>
                </div>
                <div class="footer-section">
                    <h3>روابط سريعة</h3>
                    <ul>
                        <li><a href="index.html#about">عن الجمعية</a></li>
                        <li><a href="index.html#governance">الحوكمة</a></li>
                        <li><a href="index.html#donations">مواقع جمع التبرعات</a></li>
                        <li><a href="index.html#jobs">الوظائف</a></li>
                        <li><a href="#media">المركز الإعلامي</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>تواصل معنا</h3>
                    <ul class="contact-list">
                        <li><i class="fas fa-map-marker-alt"></i> العرضة، GCJA3238، 3238 1660، 6356، العرضة 85371</li>
                        <li><i class="fas fa-phone"></i> 0506270030</li>
                        <li><i class="fas fa-envelope"></i> info@dayaem.org</li>
                    </ul>
                    <div class="social-links">
                        <a href="mailto:info@dayaem.org"><i class="fas fa-envelope"></i></a>
                        <a href="https://twitter.com/dayaem_org" target="_blank" rel="noopener"><span
                                style="font-size:22px;font-weight:bold;display:inline-block;line-height:1;">X</span></a>
                        <a href="https://wa.me/966506270030" target="_blank" rel="noopener"><i
                                class="fab fa-whatsapp"></i></a>
                    </div>

                    <!-- خريطة الموقع -->
                    <div class="map-container">
                        <h4 class="map-title">موقعنا على الخريطة</h4>
                        <div class="map-wrapper" style="position:relative;">
                            <!-- الموقع الدقيق: جمعية دعائم للعناية بالمساجد بقوز الجعافرة
                                العنوان: العرضة، GCJA3238، 3238 1660، 6356، العرضة 85371
                                الإحداثيات: 17.14354385404406, 42.488003271164104 -->
                            <iframe
                                src="https://maps.google.com/maps?q=17.14354385404406,42.488003271164104&hl=ar&z=18&t=k&output=embed"
                                width="100%" height="250" style="border:0;border-radius:15px;" allowfullscreen=""
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                title="موقع جمعية دعائم للعناية بالمساجد - العرضة، قوز الجعافرة">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 جمعية دعائم للعناية بالمساجد بقوز الجعافرة - جميع الحقوق محفوظة</p>
            </div>
        </div>
    </footer>

    <!-- زر واتساب ثابت -->
    <a href="https://wa.me/966506270030" class="fixed-whatsapp" target="_blank" aria-label="تواصل واتساب">
        <i class="fab fa-whatsapp"></i>
    </a>
`;
