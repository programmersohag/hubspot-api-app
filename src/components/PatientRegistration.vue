<template>
  <div>
    <section class="header-image">
      <div class="header-content">
        <h1 class="heading-one">Patient</h1>
        <p class="heading-two">Add following data to submit the application</p>
      </div>
    </section>
    <section class="main-content">
      <form class="signup-form">
        <div class="row">
          <div class="col-xs-6">
            <div class="form-group">
              <label><i class="far fa-user"></i></label>
              <input class="input-control" placeholder="First Name"/>
            </div>
          </div>
          <div class="col-xs-6">
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
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="form-group">
              <label></label>
              <input class="input-control" placeholder="Middle Name"/>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label><i class="far fa-envelope"></i></label>
              <input class="input-control" placeholder="Email"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="form-group">
              <label></label>
              <input class="input-control" placeholder="Last Name"/>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label><i class="far fa-heart"></i></label>
              <input class="input-control" placeholder="Insurance Currier"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="form-group">
              <label><i class="fas fa-map-marker-alt"></i></label>
              <input class="input-control" placeholder="Address"/>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label><i class="fas fa-shield-alt"></i></label>
              <input class="input-control" placeholder="Policy Currier"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="form-group">
              <label></label>
              <input class="input-control" placeholder="City"/>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label><i class="fas fa-user-injured"></i></label>
              <input class="input-control" placeholder="Patient ID"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="form-group">
              <label></label>
              <select class="input-control">
                <option>State</option>
              </select>
              <input class="input-control" placeholder="Zip"/>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label></label>
              <div class="input-control">Previous Report</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="row">
              <div class="col-xs-12">
                <div class="form-group">
                  <label><i class="fab fa-searchengin"></i></label>
                  <input class="input-control" placeholder="Disease and Symptoms"/>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="form-group">
                  <label></label>
                  <select class="input-control">
                    <option>Date of Birth</option>
                  </select>
                  <select class="input-control">
                    <option>Month</option>
                  </select>
                  <select class="input-control">
                    <option>Year</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="form-group">
                  <label><i class="fas fa-user-plus"></i></label>
                  <input class="input-control" placeholder="Provider Name"/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="row">
              <div class="col-xs-12">
                <div class="form-group">
                  <label></label>
                  <input type="file" class="input-control file-input"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="form-group">
              <label><i class="fas fa-user-minus"></i></label>
              <input class="input-control" placeholder="Provider ID"/>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label></label>
              <div class="input-control">If no provider is assigned, click on the circle for type of provider you
                need.
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="form-group">
              <label><i class="far fa-comment-alt"></i></label>
              <textarea class="input-control" placeholder="Provider Comment..."></textarea>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="row">
              <div class="form-group">
                <label></label>
                <input type="radio" class="input-control" name="available-health" value="Mental"/>Mental Health
                Available
                <input type="radio" class="input-control" name="available-health" value="Physical"/>Physical
                Health Available
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <label></label>
                <div>Schedule Appointment?</div>
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <label></label>
                <input type="radio" class="input-control" name="is-schedule" value="Yes"/>Yes
                <input type="radio" class="input-control" name="is-schedule" value="No"/>No
              </div>
            </div>
          </div>
        </div>
        <div class="row center-xs">
          <div class="col-xs-4">
            <button type="button">Submit</button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
