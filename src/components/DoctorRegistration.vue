<template>
<div>
  <section class="doctor-header-image">
    <div class="doctor-header-content">
      <h1 class="heading-one">Hello, Dr. John</h1>
      <p class="heading-two">Lorem ipsum is simply dummy of the <br> printing and type setting industry</p>
    </div>
  </section>
  <section class="main-content">
    <form class="signup-form">
      <div class="container">
        <div class="col-xs-6 col-xs-offset-3">
          <div class="row center-xs">
            <h1 style="padding-bottom: 30px">Registration</h1>
          </div>
          <div class="col-xs-12">
            <div class="form-group">
              <label><i class="fas fa-user-alt"></i></label>
              <input type="text" class="input-control" placeholder="Name"/>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="form-group">
              <label><i class="far fa-envelope"></i></label>
              <input type="text" class="input-control" placeholder="Email"/>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="form-group">
                <label><i class="fas fa-phone"></i></label>
                <select class="input-control">
                  <option>+01</option>
                </select>
                <input class="input-control" placeholder="Phone"/>
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="form-group">
              <label><i class="far fa-check-square"></i></label>
              <select class="input-control">
                <option>Type of Specialist</option>
              </select>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="form-group">
              <label><i class="fas fa-map-marker-alt"></i></label>
              <input class="input-control" placeholder="Address"/>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="form-group">
              <label></label>
              <input class="input-control" placeholder="City"/>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="form-group">
              <label></label>
              <select class="input-control">
                <option>State</option>
              </select>
              <input class="input-control" placeholder="Zip"/>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="form-group">
              <label><i class="fas fa-user-minus"></i></label>
              <input class="input-control" placeholder="Physician ID"/>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="form-group">
              <label></label>
              <button type="button" class="btn btn-indigo-square">Submit Request</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</div>
</template>

<script>
export default {
  name: "DoctorRegistration"
}
</script>

<style scoped>

</style>