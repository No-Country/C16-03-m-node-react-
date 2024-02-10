class TestController {
  test(req, res) {
    res.send('its working');
  }
}

const testController = new TestController();

export { testController };
