# Azure DevOps Deployment Template Notes

## 1. Azure DevOps Template Definitions

Typically, you would want to set up either Option (a), or Option (b) AND Option (c), but not all three jobs.

- **[infra-and-webapp-pipeline.yml](infra-and-webapp-pipeline.yml):** Deploys the main.bicep template, builds the website code, then deploys the website to the Azure App Service
- **[infra-only-pipeline.yml](infra-only-pipeline.yml):** Deploys the main.bicep template and does nothing else
- **[build-webapp-only-pipeline.yml](build-webapp-only-pipeline.yml):** Builds the website and then deploys the website to the Azure App Service
- **[deploy-webapp-only-pipeline.yml](deploy-webapp-only-pipeline.yml):** Deploys a previously built website to the Azure App Service
- **[scan-pipeline.yml](scan-pipeline.yml):** Performs a periodic security scan
- **[smoke-test-pipeline.yml](scan-pipeline.yml):** Performs a smoke test of your website

---

## 2. Deploy Environments

These Azure DevOps YML files were designed to run as multi-stage environment deploys (i.e. DEV/QA/PROD). Each Azure DevOps environments can have permissions and approvals defined. For example, DEV can be published upon change, and QA/PROD environments can require an approval before any changes are made.

---

## 3. Setup Steps

- [Create Azure DevOps Service Connections](https://docs.luppes.com/CreateServiceConnections/)

- [Create Azure DevOps Environments](https://docs.luppes.com/CreateDevOpsEnvironments/)

- Create Azure DevOps Variable Groups - see next step in this document (the variables are unique to this project)

- [Create Azure DevOps Pipeline(s)](https://docs.luppes.com/CreateNewPipeline/)

- Run the infra-and-website-pipeline.yml pipeline to deploy the project to an Azure subscription.

---

## 4. These pipelines needs a variable group named "lll-aspireapp.Web"

To create this variable groups, customize and run this command in the Azure Cloud Shell.

Alternatively, you could define these variables in the Azure DevOps Portal on each pipeline, but a variable group is a more repeatable and scriptable way to do it.

``` bash
   az login

   az pipelines variable-group create 
     --organization=https://dev.azure.com/<yourAzDOOrg>/ 
     --project='<yourAzDOProject>' 
     --name aspireapp.blazor.net8.web
     --variables 
         appName='<yourInitials>-aspireapp' 
         apiKey='<yourapiKey>'
         adDomain='yourDomain.onmicrosoft.com'
         adTenantId='yourTenantId'
         adClientId='yourClientId'
         adInstance='yourLoginInstance'
         serviceConnectionName='yourServiceConnectionName'
```
