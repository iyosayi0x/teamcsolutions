<footer class="footer"> 
    <section class="footer__top">
        <section>
            <div>
                <p class="footer__cta">Elevate Your Business with Cutting-Edge Cloud, Cybersecurity, and AI Solutions.</p>
            </div>
        </section>
    
        <section>
            <div class="footer__section-title">Services</div>
        </section>
    
        <section>
            <div class="footer__section-title">Company</div>
        </section>
    </section>

    <section class="footer__bottom">
        <div class="footer__copy"> 
            &copy; 2024<span class="dot"/> Team Consulting Solutions
        </div>

        <div>
            <a href="tel:#">Call Us +1346-399-4530</a>
        </div>

        <div>
            <a href="tel:#">Info@teamcsolutions.com</a>
        </div>
    </section>
</footer>

<style lang="scss">
    @use "../css_lib" as *;
    .footer { 
		padding: 2.5rem 7.5rem;
    }

    .footer__top { 
        padding: 0 7.5rem;
        margin-bottom: 2rem;
        @include flexbox(space-between, flex-start);
    }

    .footer__section-title { 
        font-weight: 600;
        color: black;
    }

    .footer__cta { 
        font-size: $text-h3;
        max-width: 20rem;
        font-weight: 500;
        line-height: 2.5rem;
    }

    .footer__bottom { 
        @include flexbox(space-between, center);
        margin-top: 2rem;
    }

    .footer__copy { 
        @include flexbox(flex-start, center);
        gap: .2rem;
    }
</style>