document.addEventListener("DOMContentLoaded", function () {
  // Define the WhatsApp number
  const whatsappNumber = "+5521981206570";

  // Service messages
  const serviceMessages = {
    passagens: "Olá, gostaria de saber mais sobre as passagens aéreas. Poderia me ajudar?",
    cruzeiro: "Olá, estou interessado em um Cruzeiro Disney. Poderia me fornecer mais informações?",
    orcamento: "Olá, gostaria de obter mais detalhes sobre o seguro viagem. Como posso proceder?",
    hotel: "Olá, estou procurando um hotel em Orlando. Você pode me ajudar a encontrar a melhor opção?",
    aluguel: "Olá, gostaria de alugar um carro em Orlando. Poderia me passar as opções e tarifas?",
    guiamento: "Olá, gostaria de saber mais sobre o guiamento virtual para os parques da Disney. Como funciona?",
    ingressos: "Olá, gostaria de saber mais sobre os ingressos para os parques da Disney. Quais são as opções disponíveis?",
    completo: "Olá, estou interessado em um pacote completo para minha viagem. Poderia me dar mais informações?"
  };

  // Function to open WhatsApp chat
  function openWhatsApp(service) {
    const message = encodeURIComponent(serviceMessages[service]);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  }

  // Attach event listeners to buttons
  document.getElementById("passagens").addEventListener("click", function () {
    openWhatsApp("passagens");
  });

  document.getElementById("cruzeiro").addEventListener("click", function () {
    openWhatsApp("cruzeiro");
  });

  document.getElementById("orcamento").addEventListener("click", function () {
    openWhatsApp("orcamento");
  });

  document.getElementById("hotel").addEventListener("click", function () {
    openWhatsApp("hotel");
  });

  document.getElementById("aluguel").addEventListener("click", function () {
    openWhatsApp("aluguel");
  });

  document.getElementById("guiamento").addEventListener("click", function () {
    openWhatsApp("guiamento");
  });

  document.getElementById("ingressos").addEventListener("click", function () {
    openWhatsApp("ingressos");
  });

  document.getElementById("completo").addEventListener("click", function () {
    openWhatsApp("completo");
  });
});
