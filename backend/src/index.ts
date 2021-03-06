import * as appInsights from 'applicationinsights';
if (process.env.APPINSIGHTS_INSTRUMENTATIONKEY) {
  appInsights.setup().start();
}
import app from './app';

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}!!`);
});
