// ----------------------------------------------------------------------------------------------------
// Bicep Parameter File
// ----------------------------------------------------------------------------------------------------

using './main.bicep'

param appName = '#{appName}#'
param environmentCode = '#{environmentNameLower}#'

param adInstance = '#{adInstance}#'
param adDomain = '#{adDomain}#'
param adTenantId = '#{adTenantId}#'
param adClientId = '#{adClientId}#'
param apiKey = '#{apiKey}#'
param location = '#{location}#'
