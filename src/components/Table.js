import React from 'react'

const Table = ({ rules, onRuleClick }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Category</td>
                        <td>Description</td>
                        <td>Example Score</td>
                    </tr>
                </thead>
                <tbody>
                    {rules.map((rule, i) => (
                        <tr key={i} onClick={() => onRuleClick(rule)}>
                            <td>{rule.label}</td>
                            <td>{rule.description}</td>
                            <td>{rule.values ? rule.calculator(rule.values) : rule.example}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
