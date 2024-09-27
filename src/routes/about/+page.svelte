

<svelte:head>
	<title>About Team Consulting solutions</title>
</svelte:head>

<script>
    import officeImage from "$lib/assets/office.jpg";
    import office2Image from "$lib/assets/office-2.jpg"

    const solutions = [
        {
            title:"Cloud Solutions",
            description:"We provide scalable cloud services to boost efficiency and streamline your business operation"
        },
        {
            title:"Cyber Security",
            description:"Comprehensive cybersecurity solutions to protect your data and systems from evolving threats and risks."
        },
        {
            title:"AI & Machine Learning",
            description:"Advanced AI and machine learning solutions to turn data into actionable insights and drive innovation."
        },
    ]
</script>


<section class="about__cta">
    <h1>Explore Our Cloud and Digital Solutions</h1>
    <p>Ready to transform your business? Our cloud and digital solutions offer unparalleled value. Experience the difference firsthand.</p>
    <a href="mailto:info@teamcsolutions.com" class="primary-btn">Get A Consultation</a>
</section>

<section class="about__services">
    <section>
        <div class="about__services__title">Empowering Businesses with Strategic Road Maps</div>
        <!-- --- services ---  -->
        <div class="about__services__list">
            {#each solutions as {  title, description }}
                <article class="about__services__service">
                    <div class="about__services__service-title">{title}</div>
                    <div class="about__services__service-description">{description}</div>
                </article>
            {/each}
        </div>
    </section>

    <section class="about__services__image-container">
        <img src={officeImage} alt="office place"/>
    </section>
</section>


<section class="about__why">
    <div class="about__why__title">Transforming Your Business with Our Cloud and Cybersecurity Solutions.</div>

    <div class="about__why__main"> 
        <div class="about__why__image-container">
            <img src={office2Image} alt="office place vertical"/>
        </div>

        <article class="about__why__article">
            <div>
                <div class="about__why__article__title">Your Growth, Our Passion.</div>
                <div class="about__why__article__description">
                    Together, we unlock the full potential of your business. As a true partner, <b>Team Consulting Solutions</b> is committed to driving your success.
                </div>
            </div>

            <div>
                <div class="about__why__article__title">Innovating for a Better Tomorrow.</div>
                <div class="about__why__article__description">
                    Partner with <b>Team Consulting Solutions</b> to embrace the future of technology and transform your business. Our innovative solutions are designed to propel you forward.
                </div>
            </div>

            <div>
                <div class="about__why__article__title">A Foundation Of Trust.</div>
                <div class="about__why__article__description">
                    Built on a foundation of trust, our partnership with <b>Team Consulting Solutions</b> will help you achieve your goals. Count on us to deliver.
                </div>
            </div>


            <div>
                <a href="/services" class="primary-btn">View All Our Services</a>
            </div>
        </article>
    </div>
</section>

<section class="about__contact" id="contact">
    <div>Unlock Your Business Potential with Cloud Solutions”</div>
</section>


<style lang="scss">
    @use "../../css_lib" as *;

    .about__cta { 
        max-width: 50rem;
        margin: 2rem auto;
        text-align: center;
        @include flexbox(center, center);
        flex-direction: column;
        gap: 2rem;
        h1 {
            font-size: calc($text-h1 + 1rem);
            font-weight: 500 !important;
        }

        p { 
            font-size: $text-h4;
        }
    }

    .about__services { 
        margin-top: 7rem;
        padding: 0 $page-block-padding;
        @include flexbox(space-between, center);
        &>section {
            flex: .5;
        }
    }
    .about__services__title { 
        font-size: $text-h1;
        max-width: 30rem;
        line-height: 3.4rem;
        font-weight: 500;
    }

    .about__services__list { 
        margin-top: 3rem;
        &>article:not(:last-child) { 
            margin-bottom: 2rem;
        }
    }

    .about__services__service { 
        padding-left: 3rem;
        &-title { 
            font-size: $text-h3;
            font-weight: 400;
            cursor: pointer;
            transition: .4s;
            &:hover{
                color: $primary-color;
            }
            &:before {
                content: "+";
                color: $primary-color;
                padding-right: 1rem;
            }
        }
        &-description { 
            color: $grey-color-1;
            margin-top: .5rem;
            display: none;
        }
    }

    .about__services__image-container { 
        height: 28rem;
        background: $grey-color-1;
        border-radius: .5rem;
        max-width: 40rem;
        img { 
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
        }
    }

    .about__contact {
        background: $primary-color;
        padding: 2.5rem $page-block-padding;
        margin-top: 4rem;
        text-align: center;
        color: white;
    }

    .about__why { 
        padding: 2rem $page-block-padding;
    }

    .about__why__main { 
        @include flexbox(space-between, flex-start);
        margin-top: 2rem;
    }

    .about__why__title { 
        font-size: xx-large;
        max-width: 50rem;
        font-weight: 500;
        margin-top: 5rem;
        margin-bottom: 3rem;
    }

    .about__why__image-container { 
        height: 50rem;
        background: $grey-color-1;
        flex: .46;
        border-radius: .5rem;
        img { 
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
        }
    }

    .about__why__article  {
        flex:.4;
        &>div:not(:last-child){ 
            margin-bottom: 4rem;
        }
    }

    .about__why__article__title { 
        font-size: $text-h3;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    .about__why__article__description { 
        line-height: 2rem;
    }
</style>