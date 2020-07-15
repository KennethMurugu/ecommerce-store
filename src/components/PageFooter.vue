<template>
  <div class="footer py-6 px-12">
    <div>
      <h1 class="app-name-logo">Shopio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div>
      <h3>POLICY INFO</h3>
      <p>Privacy Policy</p>
      <p>Terms of Sale</p>
      <p>Terms of Use</p>
      <p>Report Abuse &amp; Takedown Policy</p>
      <p>CSR Policy</p>
    </div>
    <div>
      <h3>COMPANY</h3>
      <p>About Us</p>
      <p>Blog</p>
      <p>Sitemap</p>
      <p>FAQ</p>
      <p>Contact Us</p>
    </div>
    <div>
      <h3>BUSINESS</h3>
      <p>Sell on Shopio</p>
      <p>Advertise on Shopio</p>
      <p>Media Enquiries</p>
      <p>Be an Affiliate</p>
      <p>Deal of the Day</p>
    </div>
    <div>
      <h3>SUBSCRIBE</h3>
      <div class="email-container mb-6">
        <input
          type="email"
          name="email"
          id="email"
          class="email-input"
          placeholder="Your email address"
        />
        <button class="btn dark btn-submit">Submit</button>
      </div>
      <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 0.75rem;
}
.email-container {
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  .email-input {
    border: none;
    background-color: #fff;
    font-family: inherit;
    width: 100%;
    padding: 0.85rem 1rem;
  }
  .btn-submit {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .footer {
    grid-template-columns: 1fr;
  }
}
</style>
