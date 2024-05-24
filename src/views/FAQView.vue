<script lang="ts">
import SecondaryBanner from '@/components/SecondaryBanner.vue'
import { marked } from 'marked'
export default {
  methods: { marked },
  components: { SecondaryBanner },
  mounted() {
    // JavaScript to toggle the answers and rotate the arrows
    document.querySelectorAll('[id^="question"]').forEach(function (button, index) {
      button.addEventListener('click', function () {
        const answer = document.getElementById('answer' + (index + 1))
        const arrow = document.getElementById('arrow' + (index + 1))

        if (!answer || !arrow) return

        if (answer.style.display === 'none' || answer.style.display === '') {
          answer.style.display = 'block'
          arrow.style.transform = 'rotate(0deg)'
        } else {
          answer.style.display = 'none'
          arrow.style.transform = 'rotate(-180deg)'
        }
      })
    })
  }
}
</script>

<template>
  <secondary-banner title="Questions fréquentes"></secondary-banner>
  <section class="py-10 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl leading-tight sm:text-3xl lg:text-4xl">Vous avez des questions ?</h2>
      </div>
      <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        <div
          class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-green-50"
        >
          <button
            type="button"
            id="question1"
            data-state="closed"
            class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          >
            <span class="flex text-lg font-semibold text-black text-left">Comment réserver une séance ?</span>
            <svg
              id="arrow1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div id="answer1" style="display: none" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>
              Pour réserver une séance, il vous suffit de cliquer sur le bouton <strong>Prendre rendez-vous</strong>.
              Ainsi, une popup apparait pour vous permettre de réserver.<br /><br />
              Choissisez votre service en cliquant sur le bouton vert <strong>Sélectionner</strong> en face du nom de celui-ci. Si c'est votre première fois,
              veuillez choisir le service <strong>Une première séance avec La Petite Plante</strong>.<br /><br />
              Choisissez, ensuite, une date où vous êtes disponible en cliquant sur le numéro du jour sur le calendrier.
              Si le jour n'est pas séléctionné après avoir cliqué dessus, cela signifie que vous ne pouvez pas prendre rendez-vous ce jour-là.
              Une fois votre jour choisi, vous pouvez cliquer sur l'heure qui vous arrange pour commencer la séance.<br /><br />
              Remplissez le formulaire avec vos informations de contact. Précisez la raison pour laquelle vous prenez ce rendez-vous.
              Vous devez confirmer que vous savez que la séance n'est pas un rendez-vous médical en cochant la case à droite de la phrase <strong>Je sais que ce n'est pas un rendez-vous médical</strong>.
              Puis, dites comment vous avez connu La Petite Plante en choissisant dans la liste déroulante une réponse.<br /><br />
              Dans la partie droite, vous devez accepter nos conditions générales de ventes en cochant la case à gauche du texte <strong>J'accepte les modalités de La Petite Plante</strong>.
              Vous devez aussi accepter notre politique d'annulation en cochant la case à gauche du texte <strong>J'accepte la politique d'annulation</strong>.
              Une fois toutes ces informations renseignés vous pouvez cliquer sur le bouton vert <strong>Réserver</strong> pour finaliser votre réservation.
            </p>
          </div>
        </div>
        <div
          class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-green-50"
        >
          <button
            type="button"
            id="question2"
            data-state="closed"
            class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          >
            <span class="flex text-lg font-semibold text-black text-left">Comment annuler une séance ?</span>
            <svg
              id="arrow2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div id="answer2" style="display: none" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>
              <strong>Depuis le site</strong><br />
              Pour annuler votre réservation, il vous faut aller dans l'espace de réservation.
              Pour cela, cliquer sur le bouton <strong>Espace réservation</strong> dans la barre du haut de la page d'accueil du site.<br /><br />
              Une fois dans l'espace de réservation, vous pouvez consulter vos réservations en cliquant sur <strong>Mes réservations</strong> en haut à droite de la page.<br />
              Vous verrez, ainsi, votre réservation. Cliquez ensuite sur le bouton <strong>Annuler la réservation</strong>.<br /><br />
              <strong>Depuis les mails reçus</strong><br />
              Lors de votre réservation, vous avez reçu un mail de confirmation de rendez-vous de la part de La petite plante. Si vous ne trouvez pas dans votre boîte mail, vérifiez vos spams.<br />
              Dans ce mail, vous trouverez un lien pour annuler votre rendez-vous. Il vous suffit de cliquer dessus.
            </p>
          </div>
        </div>
        <div
          class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-green-50"
        >
          <button
            type="button"
            id="question3"
            data-state="closed"
            class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          >
            <span class="flex text-lg font-semibold text-black text-left"
              >Comment changer la date d'une réservation ?</span
            >
            <svg
              id="arrow3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div id="answer3" style="display: none" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>
              <strong>Depuis le site</strong><br />
              Pour modifier votre réservation, il vous faut aller dans l'espace de réservation.
              Pour cela, cliquer sur le bouton <strong>Espace réservation</strong> dans la barre du haut de la page d'accueil du site.<br /><br />
              Une fois dans l'espace de réservation, vous pouvez consulter vos réservations en cliquant sur <strong>Mes réservations</strong> en haut à droite de la page.<br />
              Vous verrez, ainsi, votre réservation. Cliquez sur le bouton <strong>Modifier la réservation</strong>.<br /><br />
              <strong>Depuis les mails reçus</strong><br />
              Lors de votre réservation, vous avez reçu un mail de confirmation de rendez-vous de la part de La petite plante. Si vous ne trouvez pas dans votre boîte mail, vérifiez vos spams.<br />
              Dans ce mail, vous trouverez un lien pour voir vos réservations. Cliquez sur ce lien. Une page s'ouvre sur l'espace de réservation. Cliquez sur le bouton <strong>Modifier la réservation</strong>.<br /><br />
            </p>
          </div>
        </div>
        <div
          class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-green-50"
        >
          <button
            type="button"
            id="question4"
            data-state="closed"
            class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          >
            <span class="flex text-lg font-semibold text-black text-left"
              >Comment accéder à la séance lors du jour du rendez-vous ?</span
            >
            <svg
              id="arrow4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div id="answer4" style="display: none" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>
              <strong>Depuis les mails reçus</strong><br />
              Lors de votre réservation, vous avez reçu un mail d'invitation de la part de La petite plante. Si vous ne trouvez pas dans votre boîte mail, vérifiez vos spams.<br />
              Ce mail contient un bouton bleu <strong>Participer avec google meet</strong>. Il vous suffit de cliquer sur ce bouton pour rejoindre la salle du rendez-vous via google meet.<br />
              N'oubliez pas d'autoriser l'accès au micro et à la camera de votre ordinateur.<br />
            </p>
          </div>
        </div>
      </div>
      <p class="text-center text-gray-600 textbase mt-9">
        Vous avez encore des questions ?
        <span
          class="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline"
        >
          Contactez-moi.
        </span>
      </p>
    </div>
  </section>
</template>

<style scoped></style>
