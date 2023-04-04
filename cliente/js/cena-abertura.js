export default class abertura extends Phaser.Scene {
  constructor() {
    super("abertura");
  }

  preload() {
    this.load.image("ifsc-sj-2014", "./assets/ifsc-sj-2014.png");
  }

  create() {
    this.imagem = this.add
      .image(400, 225, "ifsc-sj-2014")
      .setInteractive()
      .on("pointerdown", () => {
        this.imagem.destroy();
        this.texto.destroy();
        this.game.scene.start("principal");
      });

    this.texto = this.add.text(490, 50, "JOGAR", {
      fill: "#000000",
    });
  }

  upload() {}
}