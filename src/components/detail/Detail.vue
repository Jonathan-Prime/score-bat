.<template>
  <div class="modal-mask">
      <div class="modal-wrapper">
          <div class="modal-container">
              <div class="modal-body">
                  <div class="video" v-html="dataRandom[id].embed">
            
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
import { EventBus } from '../../eventBus.js'
export default {
    name: 'detail',
    props: ['dataRandom'],
    data(){
        return { 
            id: '',
        }
    },
    created(){
        EventBus.$on("showVideo", (item) => {
            this.id = item;
        })
    }
}
</script>

<style>

</style>