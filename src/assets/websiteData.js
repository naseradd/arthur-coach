const jsonData = {
    titleHomePage: "Arthur Rousseau",
    mainTitleDescription: `Présentation Coaching`,
    mainDescription: `Bonjour, je m’appelle Arthur, D’origine française et âgé de 29 ans. J’ai découvert Montréal, cette ville remplis d’esprit sportif. Je suis venu ici avec l’envie d’apporter une touche nord-américaine à mon coaching. Ce mélange multiculturel m’aide dans l’accompagnement et l’écoute de mes sportifs. 
    Le coaching que je pratique depuis maintenant 4 ans, signe l’empreinte de mon passé en tant que pompier de Paris. Formé par l’un des précurseurs du fitness à Paris, j’ai pu faire mes armes dans plusieurs centres d’entrainement. J’entraine désormais avec l’identité d’un coaching positif et holistique s’appuyant sur de bonnes bases théoriques. L’expérience du terrain me permet de vous donner des conseils et des exercices adaptés à vos capacités.`,
    mainTitle2Description: `Présentation Massothérapie`,
    mainDescription2: `Formé à Montréal en 2021 à l’Académie des massages scientifiques, je détiens une formation de 400 heures. Mon massage se base sur la relaxation et récupération musculaire. J’aime combiner le massage et le coaching car ce sont deux métiers qui se complètent.`,
    endMainDescription: `Impatient de vous aider, sportivement`,
    temoign_Title: "Livre d'or",
    plan_training: "Forfaits Entraînement",
    plan_massage: "Forfaits Massage",
    rendezVous: "Contactez moi",
    questionsAndInterest: "Avez-vous des questions ? Voudriez-vous commencer tout de suite ?",
    temoign: [{
            name: "Natan Weinberger, client de 1 ans.",
            text: "« Arthur est le meilleur coach. J'ai ajouté 25 livres de muscle cette année. »",
            img: "background-image: url('img/natan_temoign.jpg')"
        },
        {
            name: "Carol Zhang, client de 1 ans.",
            text: "« Il m'a beaucoup aidé ! »",
            img: "background-image: url('img/carol_temoign.jpg')"
        },
    ],
    trainingData: [{
            title: "Forfait d’entrainement Focusgym",
            description: "2237 rue larivière, Montréal, QC H2K 1P6",
            link: "https://goo.gl/maps/N8ST5R4C9mfqnPRi9",
            unite: "/séance",
            price: "CAD $70",
            bonus_description: "En plus, vous recevrez:",
            pro: [
                "Gym privée individuel",
                "Accès à douche et toilette",
                "Accès à une place parking privée extérieur",
                "Accès au gym avec le coach"
            ],
            bonus: [
                "Accès au plan créer sur hexfit",
                "Prise de photo et mesures corporels",
                "Au départ, et suivis continue",
                "Remise à jour des entrainements selon les objectifs"
            ]
        },
        {
            title: "Forfait d’entrainement Rgym",
            description: "279 rue Sherbrooke O #315, Montréal, QC H2X 1Y2",
            link: "https://goo.gl/maps/2rzjsWzzEXo3KVJi7",
            unite: "/séance",
            price: "CAD $75",
            bonus_description: "En plus, vous recevrez:",
            pro: [
                "Gym fonctionnel",
                "Accès à douche et toilette",
                "Accès au gym avec le coach"
            ],
            bonus: [
                "Accès au plan créer sur hexfit",
                "Prise de photo et mesures corporels",
                "Au départ, et suivis continue",
                "Remise à jour des entrainements selon les objectifs",
                "Forfait à domicile 60$",
                "Quartier Hochelaga/vieux port/downtown",
                "Entrainement avec et sans matériel",
                "Possibilité d’utiliser votre matériel",
            ]
        },
        {
            title: "Forfait plan d’entrainement",
            description: "",
            link: "",
            unite: "/séance",
            price: "CAD $50 + $25",
            bonus_description: "En plus, vous recevrez:",
            pro: [
                "Peu importe où vous êtes",
                "Entrainement avec et sans matériel",
                "Possibilité d’utiliser votre matériel"
            ],
            bonus: [
                "Accès au plan créer sur hexfit",
                "Renouvellement des plans toute les 3 ou 4 semaines",
                "Remise à jour des entrainements selon les objectifs"
            ]
        },
    ]
}


export default function getData(key) {
    return jsonData[key];
}