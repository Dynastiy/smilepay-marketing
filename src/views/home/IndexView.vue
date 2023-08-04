<template>
  <div>
    <header>
      <div class="hero-section">
        <h1 class="header-text">Foreign exchange and remittances made easy</h1>
        <p class="body-text">Open USD, EUR, & GBP Bank Accounts easily, get paid and make transactions with ease using smilepay</p>
        <div class="text-center">
          <button class="primary-btn">Join Wailist</button>
        </div>
      </div>
    </header>

    <section class="container py-5">
      <div class="grid-cards">
        <div class="grid-card segmented" style="background: #F8EBFF">
          <div class="pl-4 pt-4">
            <h2>Send cash to family & friends</h2>
            <p>Who remembers long account numbers anymore? Just use the smiletag</p>
          </div>
          <div class="bottom1">
            
          </div>
        </div>
        <div class="grid-card segmented" style="background:#FFFAF0">
          <div class="pl-4 pt-4">
            <h2>Get access to a wallet</h2>
            <p>Who remembers long account numbers anymore? Just use the smiletag</p>
          </div>
          <div class="bottom2">

          </div>
        </div>
        <div class="grid-card stretched" style="background-color: #DAE1ED">
          <div class="w-50">
            <span class="icon-fill">
              <i-icon icon="ri:bank-fill" />
            </span>
            <h2 class="my-1" style="color:var(--primary)">USD, GBP & EUR bank accounts for free</h2>
            <p>Receive payments from your friends, family, employers, clients directly to our own account</p>
            <button class="primary-btn px-4 mt-1" style="min-width:max-content">Join our Waitlist</button>
          </div>
        </div>
      </div>
    </section>


    <section class="container py-5">
      <div class="waitlist-card">
        <div>
          <h1>What are you waiting for? Join our Wailist today!</h1>
        <div class="text-center mt-2"><button class="accent-btn">Join Waitlist</button></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-section {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: url('@/assets/img/smilepay-hero.png');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x:center ;
  background-position-y: bottom;
}

.header-text {
  font-family: var(--header-font);
  text-align: center;
  font-size: 54px;
  width: 50%;
  margin: 0 auto;
}

.grid-card h2 {
  font-family: var(--header-font);
  width: 67%;
}

.grid-card p {
  font-size: 12px;
  font-weight: 500;
  width: 60%;
}

.body-text {
  width: 30%;
  margin: 0 auto;
  text-align: center;
  font-size: 12.7px;
  font-weight: 500;
}

.grid-cards {
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 15px;
}

.grid-card {
  border-radius: 10px;
  min-height: 350px;
  width: 100%;
}

.grid-card.segmented {
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  grid-template-rows: 50% 50%;
}

.grid-card.segmented .bottom1 {
  background: url('@/assets/img/users.png');
  background-color: #350052;
  border-radius: 0 0 10px 10px;
  background-size: contain;
}

.grid-card.segmented .bottom2 {
  background: url('@/assets/img/wallet-card.png');
  background-color: #FFE0A3;
  border-radius: 0 0 10px 10px;
  background-size: 65%;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
}



.grid-card.stretched {
  grid-column: 1 / span 2;
  grid-row: 2;
  background: url('@/assets/img/card-bg.png');
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: 40% 80%;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.icon-fill {
  background-color: var(--white);
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  height: 25px;
  width: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.waitlist-card {
  background: url("@/assets/img/waitlist.png");
  min-height: 300px;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  padding: 30px;
}

.waitlist-card h1 {
  font-family: var(--header-font);
  width: 75%;
  margin: 0 auto;
  color: var(--white);
  text-align: center;
}

@media (max-width: 990px) {
  .header-text {
    width: 75%;
    font-size: 40px;
  }

  .body-text {
    width: 75%;
  }

  .hero-section {
    height: auto;
    padding: 40px 0;
    background: none;
  }

  .grid-card {
    height: auto;
  }

  .grid-cards {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: auto; */
  }

  .grid-card.stretched {
    background: none;
    padding: 30px;
  }

  .w-50 {
    width: 100% !important;
  }

  .grid-card h2, .grid-card p {
    width: 100%;
  }

  .waitlist-card h1 {
    font-size: 30px;
  }
}
</style>
