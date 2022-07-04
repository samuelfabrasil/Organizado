//For Register Page
const dashboardView = (req, res) => {
    /*res.render("dashboard", {
      user: req.user
    });
  };*/
    var cards = [
      {
        name: 'Jonas',
        imagem: 'images/cards/jonas.jpg'
      },
      {
        name: 'Laura',
        imagem: 'images/cards/laurinha.jpg'
      },
      {
        name: 'Rita',
        imagem: 'images/cards/rita.jpg'
      },
      {
        name: 'Joao',
        imagem: 'images/cards/joao.jpg'
      }
    ]
    var noticias = [
      {
        name: 'Mural: Leitor indica documentário sobre apoio cubano em África e livro sobre neoliberalismo na educação',
        imagem: 'images/noticias/not2.png'
      },
      {
        name: 'A América Latina entre o não alinhamento e a multipolaridade',
        imagem: 'images/noticias/not1.png'
      },
      {
        name: 'Cuba: os heróis do hotel Saratoga',
        imagem: 'images/noticias/not3.png'
      },
      {
        name: '1964: passado, presente, futuro',
        imagem: 'images/noticias/not4.png'
      }
    ]
    res.render('dashboard', { title: 'Express', cards: cards, noticias: noticias});
  };
  module.exports = {
    dashboardView,
  };