import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrencyOptionsComponent } from './components/currency-options/currency-options.component';
import { ExchangeFormComponent } from './components/exchange-form/exchange-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultPopupComponent } from './components/result-popup/result-popup.component';
import { ErrorComponent } from './components/error/error.component';
import { LogoComponent } from './components/logo/logo.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
	{ path: '', component: ExchangeFormComponent },
	{ path: 'about', component: AboutComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		CurrencyOptionsComponent,
		ExchangeFormComponent,
		FooterComponent,
		HeaderComponent,
		ResultPopupComponent,
		ErrorComponent,
		LogoComponent,
		AboutComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoutes, { enableTracing: true }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
