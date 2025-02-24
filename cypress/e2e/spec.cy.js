describe("ELB Web Page Test", () => {
    it("should load the page and check for expected text", () => {
      // ロードバランサーのURLにアクセス
      cy.visit("http://a46c8267f8b5a46e1a8d9e3e87cbe44d-944449116.ap-northeast-1.elb.amazonaws.com/");
      
      // ページ内で 'Welcome to NGINX123' が表示されているか確認
      cy.contains("Welcome to NGINX123").should("be.visible");
    });
  });
  