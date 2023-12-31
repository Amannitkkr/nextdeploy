import './manual.css'
const Banner=()=>{
    return(
        <div className='banner_body'>
        <div class="container my-24 mx-auto md:px-6">

  <section class="background-radial-gradient mb-32">
    
    <div class="px-6 py-12 text-center md:px-12 lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="flex grid items-center gap-12 lg:grid-cols-2">
          <div class="mt-12 lg:mt-0">
            <h1 class="mb-16 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
              The best offer <br /><span class="text-[hsl(218,81%,75%)]">for your business</span>
            </h1>
            <a class="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
            <a class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
          </div>
          <div class="mb-12 lg:mb-0">
            <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/horizontal/058.jpg"
              class="w-full rounded-lg shadow-lg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
</div>

    )
}
export default Banner;