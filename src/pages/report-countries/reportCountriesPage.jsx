import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import Searchbar from '../../components/Searchbar/Searchbar'
import ReportsSatrCountries from '../../components/ReportsStar/ReportsSatrCountries'
import CountriesPagecss from './reportCountries.module.css'

export default function ReportCountriesPage() {
    return (
        <div className={CountriesPagecss.container}>
            <Sidebar />
            <main className={CountriesPagecss.main}>
                <ReportsSatrCountries />
            </main>
        </div>
    )
}
