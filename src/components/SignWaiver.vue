<template>
  <div>
    I {{ name }} in consideration of my participation in Isha Foundation, Inc.
    ("ISHA") sponsored events and to be permitted to participate in any way in
    Isha sponsored Events ("Events"), my personal representatives, assigns,
    heirs, and next to kin: 1. UNDERSTAND that this program and its contents are
    confidential and agree not to disclose or disseminate any portion of this
    program for any purpose. I consent and agree to refrain from taking any
    notes, audio, photographic or video graphic records of this Program. 2.
    UNDERSTAND that photographs and video graphic images of the program and its
    participants may be taken by Isha Foundation and I hereby release Isha
    Foundation and its representatives from any claims I may have to the use and
    dissemination of such photographs or video graphic images 3. UNDERSTAND that
    this program is not a substitute for medical care and offers no guarantees
    and that I should seek the advice of a qualified health care professional
    from further engaging in yoga or making any dietary changes 4. ACKNOWLEDGE,
    agree and represent that I understand the nature of ISHA Events and that I
    am qualified, in good health and in proper physical and mental condition to
    participate in such Events. I further agree and warrant that if at any time
    I believe conditions to be unsafe, I will immediately discontinue further
    participation in such Events. 5. FULLY UNDERSTAND That: (a) ISHA EVENT MAY
    INVOLVE RISKS AND DANGERS WHICH WOULD RESULT IN SERIOUS BODILY INJURY,
    INCLUDING PERMANENT DISABILITY, PARALYSIS AND DEATH ("Risks"); (b)these
    Risks and Dangers to which I will be exposed involve ever changing and
    unpredictable natural conditions, the condition in which Events take place,
    my own actions, or inactions, or the NEGLIGENCE OF THE "RELEASES" NAMED
    BELOW; (c) there may be other RISKS AND SOCIAL AND ECONOMIC LOSSES either
    not known to me or not readily foreseeable at this time; and I CHOOSE TO
    PROCEED WITH EVENTS AND FULLY ACCEPT AND ASSUME ALL SUCH RISKS AND ALL
    RESPONSIBILITY FOR LOSSES, COSTS, AND DAMAGES I incur as a result of my
    participation in ISHA Events. 6. HEREBY RELEASE, DISCHARGE, AND COVENANT NOT
    TO SUE ISHA, its respective officers, leaders, organizers, members,
    volunteers, other participants, and , if applicable, owners and lessors of
    premises or equipment with which the Events take place, (each considered on
    of the "Releases" herein) FROM ALL LIABILITY, CLAIMS, DEMANDS, LOSSES, OR
    DAMAGES ON MY ACCOUNT CAUSED OR ALLEGED TO BE CAUSED IN WHOLE OR IN PART BY
    THE NEGLIGENCE OF THE "RELEASES" OR OTHERWISE, INCLUDING NEGLIGENT RESCUE
    OPERATIONS CONNECTED TO MY PARTICIPATION IN ISHA EVENTS; AND I FUTHER AGREE
    that if, despite this RELEASE AND Page 1 of 26. Waiver Form WAIVER OF
    LIABILITY, ASSUMPTION OF RISK, AND INDEMNITY AGREEMENT I or anyone on my
    behalf, makes a claim against any of the Releases, I WILL INDEMNIFY, SAVE,
    AND HOLD HARMLESS EACH OF THE RELEASES from any litigation expenses,
    attorney fees, loss, liability, damage, or cost which I may incur as the
    result of such claim. 7. FULLY UNDERSTAND that I may assist my fellow
    participants to the best of my own ability if they appear to need such
    assistance, but only for so long as I can do so, in my judgment, without
    unreasonably endangering myself. I further understand that I have no legal
    obligation to assist, and that neither of my fellow participants nor any
    other member or guest of the ISHA has any legal obligation to render
    assistance to me. This release is given to enable other participants and me
    to feel free to participate in ISHA Events and to donate our services to
    help each other without fear of liability. This release is given in
    consideration for similar releases granted or to be granted to my benefit by
    other participants on ISHA Events. THIS RELEASE HAS NO EXPIRATION DATE AND
    SHALL BE DEEMED REAFFIRMED EACH TIME I PARTICIPATE IN ANY ISHA EVENT OR STAY
    AT IIIS. I HAVE READ THIS AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND
    THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT AND HAVE SIGNED IT
    FREELY AND WITHOUT ANY INDUCEMENT OR ASSURANCE OF ANY NATURE AND INTEND IT
    TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF LIABILITY TO THE GREATEST
    EXTENT ALLOWED BY LAW AND AGREE THAT IF ANY PORTION OF THIS AGREEMENT IS
    HELD TO BE INVALID, THE BALANCE, NOTWITHSTANDING, SHALL CONTINUE IN FULL
    FORCE EFFECT.
    <b-form @submit="onSubmit">
    <b-button type="submit" variant="primary">Submit</b-button>
  </div>
</template>


<script>
import { HTTP } from "../common/http"

export default {
  name: 'SignWaiver',
  components: {
  },
  data() {
    return {
      picked: '',
      visitInfo: {
        checkin_date: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0],
        checkout_date: '',
        visitor: this.meditator.sfid
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault(),
        HTTP.post('/createNew', { 'visitInfo': this.visitInfo }).then(response => {
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
    },
  },
  props: {
    meditator: {
      type: Object,
      required: true
    },
  }
}
</script>