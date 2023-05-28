alias b := build
alias p := preview
alias u := update

dev:
	PUBLIC_TAURI_DEV=false npm run dev

build:
	PUBLIC_TAURI_DEV=false npm run build

preview:
	PUBLIC_TAURI_DEV=false npm run preview

update:
	npm update iapau-components

db:
	psql -d iapau -U iapau -a -f migrations iapau.sql
