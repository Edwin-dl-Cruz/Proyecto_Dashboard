// ES6 
import bs from 'browser-sync';

bs.create().init({ watch: true, server: './app'});