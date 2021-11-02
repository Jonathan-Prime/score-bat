.<template>
  <div class="modal-mask">
      <div class="modal-wrapper">
          <div class="modal-container">
              <div class="modal-body">
                  <div class="video">
                      popup
                  </div>
              </div>
              <div class="modal-footer">
                  <slot name="footer">
                      <button class="btn btn-danger" @click="$emit('close')">Cerrar</button>
                  </slot>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'detail'
}
</script>

<style>

</style>